/**
 * QR Code Generator Helper Functions
 * Provides utilities for generating QR codes in various formats
 */

export interface QRCodeOptions {
  text: string;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  errorCorrectionLevel?: "L" | "M" | "Q" | "H";
  margin?: number;
  format?: "svg" | "png" | "jpeg" | "webp";
}

export interface QRCodeResult {
  dataUrl?: string;
  svg?: string;
  error?: string;
}

/**
 * Generate QR code using a web API (Google Charts API)
 * @param options - QR code generation options
 * @returns Promise with QR code data URL
 */
export async function generateQRCodeWithAPI(
  options: QRCodeOptions
): Promise<QRCodeResult> {
  try {
    const {
      text,
      width = 200,
      height = 200,
      color = "000000",
      backgroundColor = "FFFFFF",
      errorCorrectionLevel = "M",
      margin = 4,
    } = options;

    // Google Charts API for QR code generation
    const apiUrl = "https://chart.googleapis.com/chart";
    const params = new URLSearchParams({
      cht: "qr",
      chs: `${width}x${height}`,
      chl: text,
      chco: color,
      chld: `${errorCorrectionLevel}|${margin}`,
      chf: `bg,s,${backgroundColor}`,
    });

    const response = await fetch(`${apiUrl}?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Failed to generate QR code: ${response.statusText}`);
    }

    const blob = await response.blob();
    const dataUrl = await blobToDataURL(blob);

    return { dataUrl };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Generate QR code using QR Server API
 * @param options - QR code generation options
 * @returns Promise with QR code data URL
 */
export async function generateQRCodeWithQRServer(
  options: QRCodeOptions
): Promise<QRCodeResult> {
  try {
    const {
      text,
      width = 200,
      height = 200,
      color = "000000",
      backgroundColor = "FFFFFF",
      errorCorrectionLevel = "M",
      margin = 4,
    } = options;

    // QR Server API
    const apiUrl = "https://api.qrserver.com/v1/create-qr-code/";
    const params = new URLSearchParams({
      data: text,
      size: `${width}x${height}`,
      color: color,
      bgcolor: backgroundColor,
      qzone: margin.toString(),
      format: "png",
      ecc: errorCorrectionLevel,
    });

    const response = await fetch(`${apiUrl}?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Failed to generate QR code: ${response.statusText}`);
    }

    const blob = await response.blob();
    const dataUrl = await blobToDataURL(blob);

    return { dataUrl };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Generate QR code SVG using a simple implementation
 * Note: This is a basic implementation. For production use, consider using a dedicated QR library
 * @param options - QR code generation options
 * @returns QR code SVG string
 */
export function generateQRCodeSVG(options: QRCodeOptions): QRCodeResult {
  try {
    const {
      text,
      width = 200,
      height = 200,
      color = "#000000",
      backgroundColor = "#FFFFFF",
    } = options;

    // This is a placeholder implementation
    // In a real implementation, you would use a QR code library like 'qrcode' or 'qrcode-generator'
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${backgroundColor}"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${color}" font-family="Arial" font-size="12">
          QR Code for: ${text}
        </text>
      </svg>
    `;

    return { svg };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Convert blob to data URL
 * @param blob - The blob to convert
 * @returns Promise with data URL string
 */
async function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Generate QR code with fallback options
 * @param options - QR code generation options
 * @param preferredMethod - Preferred generation method ('api' | 'qrserver' | 'svg')
 * @returns Promise with QR code result
 */
export async function generateQRCode(
  options: QRCodeOptions,
  preferredMethod: "api" | "qrserver" | "svg" = "api"
): Promise<QRCodeResult> {
  const methods = {
    api: generateQRCodeWithAPI,
    qrserver: generateQRCodeWithQRServer,
    svg: generateQRCodeSVG,
  };

  // Try preferred method first
  let result = await methods[preferredMethod](options);

  if (!result.error) {
    return result;
  }

  // Fallback to other methods
  for (const [method, generator] of Object.entries(methods)) {
    if (method === preferredMethod) continue;

    result = await generator(options);
    if (!result.error) {
      return result;
    }
  }

  return result;
}

/**
 * Generate QR code for specific use cases
 */
export const QRCodeGenerators = {
  /**
   * Generate QR code for URL
   */
  forURL: (url: string, options?: Partial<QRCodeOptions>) =>
    generateQRCode({ text: url, ...options }),

  /**
   * Generate QR code for text
   */
  forText: (text: string, options?: Partial<QRCodeOptions>) =>
    generateQRCode({ text, ...options }),

  /**
   * Generate QR code for phone number
   */
  forPhone: (phoneNumber: string, options?: Partial<QRCodeOptions>) =>
    generateQRCode({ text: `tel:${phoneNumber}`, ...options }),

  /**
   * Generate QR code for email
   */
  forEmail: (
    email: string,
    subject?: string,
    body?: string,
    options?: Partial<QRCodeOptions>
  ) => {
    let mailto = `mailto:${email}`;
    const params = new URLSearchParams();
    if (subject) params.append("subject", subject);
    if (body) params.append("body", body);
    if (params.toString()) mailto += `?${params.toString()}`;

    return generateQRCode({ text: mailto, ...options });
  },

  /**
   * Generate QR code for WiFi network
   */
  forWiFi: (
    ssid: string,
    password: string,
    encryption: "WPA" | "WEP" | "nopass" = "WPA",
    hidden: boolean = false,
    options?: Partial<QRCodeOptions>
  ) => {
    const wifiString = `WIFI:S:${ssid};T:${encryption};P:${password};H:${hidden};`;
    return generateQRCode({ text: wifiString, ...options });
  },

  /**
   * Generate QR code for vCard
   */
  forVCard: (
    contact: {
      name: string;
      phone?: string;
      email?: string;
      company?: string;
      title?: string;
      address?: string;
    },
    options?: Partial<QRCodeOptions>
  ) => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${contact.name}`,
      contact.phone ? `TEL:${contact.phone}` : "",
      contact.email ? `EMAIL:${contact.email}` : "",
      contact.company ? `ORG:${contact.company}` : "",
      contact.title ? `TITLE:${contact.title}` : "",
      contact.address ? `ADR:${contact.address}` : "",
      "END:VCARD",
    ]
      .filter((line) => line)
      .join("\n");

    return generateQRCode({ text: vcard, ...options });
  },
};

/**
 * Utility function to download QR code
 * @param dataUrl - The QR code data URL
 * @param filename - The filename for download
 */
export function downloadQRCode(
  dataUrl: string,
  filename: string = "qrcode.png"
): void {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Utility function to copy QR code to clipboard (for data URLs)
 * @param dataUrl - The QR code data URL
 * @returns Promise indicating success
 */
export async function copyQRCodeToClipboard(dataUrl: string): Promise<boolean> {
  try {
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
    return true;
  } catch (error) {
    console.error("Failed to copy QR code to clipboard:", error);
    return false;
  }
}
