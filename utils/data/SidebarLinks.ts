type LinkData = {
  name: string;
  icon?: string;
  route?: string;
  type: LinkType;
};

export enum LinkType {
  LINK = "link",
  HEADING = "heading",
}

export const LinkList: LinkData[][] = [
  [
    {
      name: "Main Workflow",
      type: LinkType.HEADING,
    },
    {
      name: "Dashboard",
      type: LinkType.LINK,
      icon: "vent:analytics",
      route: "/dashboard",
    },
    {
      name: "Banks",
      type: LinkType.LINK,
      icon: "vent:ai-voice-generator",
      route: "/banks",
    },
    {
      name: "Transactions",
      type: LinkType.LINK,
      icon: "vent:analytics",
      route: "/transactions",
    },
    {
      name: "Settlements",
      type: LinkType.LINK,
      icon: "vent:agreement",
      route: "/settlements",
    },
    {
      name: "Admins",
      type: LinkType.LINK,
      icon: "vent:ai-audio",
      route: "/admins",
    },
    {
      name: "Redeemer",
      type: LinkType.LINK,
      icon: "vent:bracket-circle",
      route: "/redeemer",
    },
  ],

  [
    {
      name: "User Management",
      type: LinkType.HEADING,
    },
    {
      name: "Customers",
      type: LinkType.LINK,
      icon: "vent:bracket-circle",
      route: "/customers",
    },
    {
      name: "Registry",
      type: LinkType.LINK,
      icon: "vent:agreement",
      route: "/registry",
    },
    {
      name: "Wallets",
      type: LinkType.LINK,
      icon: "vent:ai-scan",
      route: "/wallets",
    },
    {
      name: "Businesses",
      type: LinkType.LINK,
      icon: "vent:blood-pressure",
      route: "/businesses",
    },
  ],
  [
    {
      name: "Miscellaneous",
      type: LinkType.HEADING,
    },
    {
      name: "Configurations",
      type: LinkType.LINK,
      icon: "vent:config",
      route: "/configurations",
    },
    {
      name: "More",
      type: LinkType.LINK,
      icon: "vent:ai-scan",
      route: "/more",
    },
  ],
];
