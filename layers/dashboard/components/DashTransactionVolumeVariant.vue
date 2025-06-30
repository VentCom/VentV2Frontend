<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

// Mock transaction volume data
const transactionData = ref([
  { time: "00:00", volume: 1250, count: 45 },
  { time: "04:00", volume: 980, count: 32 },
  { time: "08:00", volume: 2100, count: 78 },
  { time: "12:00", volume: 3400, count: 125 },
  { time: "16:00", volume: 2800, count: 95 },
  { time: "20:00", volume: 1800, count: 67 },
  { time: "24:00", volume: 950, count: 38 },
]);

const selectedTimeframe = ref("today");
const selectedMetric = ref("volume");

const timeframes = [
  { value: "today", label: "Today", icon: "vent:calendar-day" },
  { value: "week", label: "This Week", icon: "vent:calendar-2" },
  { value: "month", label: "This Month", icon: "vent:calendar" },
  { value: "quarter", label: "This Quarter", icon: "vent:calendar-edit" },
];

const metrics = [
  { value: "volume", label: "Volume", icon: "vent:dollar-circle" },
  { value: "count", label: "Count", icon: "vent:hashtag" },
];

const totalVolume = computed(() => {
  return transactionData.value.reduce((sum, item) => sum + item.volume, 0);
});

const totalCount = computed(() => {
  return transactionData.value.reduce((sum, item) => sum + item.count, 0);
});

const averageVolume = computed(() => {
  return (totalVolume.value / transactionData.value.length).toFixed(0);
});

const maxValue = computed(() => {
  const values = transactionData.value.map((item) =>
    selectedMetric.value === "volume" ? item.volume : item.count
  );
  return Math.max(...values);
});

const getLineHeight = (value: number) => {
  return (value / maxValue.value) * 100;
};

const getMetricValue = (item: any) => {
  return selectedMetric.value === "volume" ? item.volume : item.count;
};

const getMetricLabel = () => {
  return selectedMetric.value === "volume" ? "Volume" : "Count";
};

const getMetricUnit = () => {
  return selectedMetric.value === "volume" ? "$" : "";
};

const getMetricSuffix = () => {
  return selectedMetric.value === "volume" ? "K" : "";
};

// Simulate real-time updates
onMounted(() => {
  setInterval(() => {
    // Update random data point
    const randomIndex = Math.floor(
      Math.random() * transactionData.value.length
    );
    const randomChange = Math.floor(Math.random() * 200) - 100;

    if (selectedMetric.value === "volume") {
      transactionData.value[randomIndex].volume = Math.max(
        0,
        transactionData.value[randomIndex].volume + randomChange
      );
    } else {
      transactionData.value[randomIndex].count = Math.max(
        0,
        transactionData.value[randomIndex].count + Math.floor(randomChange / 10)
      );
    }
  }, 5000);
});
</script>

<template>
  <div
    class="min-h-[370px] border border-dashboard-card-border rounded-[16px] p-5 flex flex-col justify-between gap-8"
  >
    <!-- Header -->
    <div class="flex justify-between items-center gap-4">
      <div class="grow">
        <h2 class="font-bold text-dashboard-heading mb-1 text-base">
          Transaction Volume
        </h2>
        <p class="text-[0.813rem] text-dashboard-text">
          Vent's transaction volume across all platforms
        </p>
      </div>

      <!-- Timeframe Filter -->
      <div class="inline-block shrink-0">
        <button
          class="border border-dashboard-card-border rounded-full py-2 px-3 flex items-center gap-2 bg-dashboard-bg-darker hover:bg-brand-color-013 hover:border-brand-color-default text-dashboard-heading text-[0.813rem] transition-all duration-300 ease-in-out"
        >
          <icon name="vent:calendar-2" size="1.2rem"></icon>
          <span>{{
            timeframes.find((t) => t.value === selectedTimeframe)?.label
          }}</span>
          <icon name="vent:arrow-down" size="1.2rem"></icon>
        </button>
      </div>
    </div>

    <!-- Chart Section - Matching Original Structure -->
    <div class="flex flex-col gap-2 w-full">
      <!-- Main Chart -->
      <div
        class="w-full bg-white rounded-lg p-4 border border-dashboard-card-border"
      >
        <!-- Chart Header -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-4">
            <h3 class="text-sm font-semibold text-dashboard-heading">
              Transaction Volume
            </h3>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-brand-color-default rounded-full"></div>
              <span class="text-xs text-dashboard-text">Live Data</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button
              v-for="metric in metrics"
              :key="metric.value"
              @click="selectedMetric = metric.value"
              class="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ease-in-out flex items-center gap-1"
              :class="
                selectedMetric === metric.value
                  ? 'bg-brand-color-default text-white'
                  : 'bg-dashboard-bg-darker text-dashboard-text hover:bg-brand-color-013'
              "
            >
              <icon :name="metric.icon" size="0.8rem"></icon>
              {{ metric.label }}
            </button>
          </div>
        </div>

        <!-- Chart Area -->
        <div
          class="relative h-32 bg-gray-50 rounded border border-dashboard-card-border p-2"
        >
          <!-- Grid lines -->
          <div class="absolute inset-0 grid grid-rows-4 gap-0">
            <div
              v-for="i in 4"
              :key="i"
              class="border-t border-dashboard-card-border opacity-30"
            ></div>
          </div>

          <!-- Data points and lines -->
          <div class="flex items-end justify-between h-full gap-1">
            <div
              v-for="(item, index) in transactionData"
              :key="index"
              class="flex-1 flex flex-col items-center gap-1 relative"
            >
              <!-- Data point -->
              <div class="relative z-10">
                <div
                  class="w-2 h-2 rounded-full bg-brand-color-default border border-white shadow-sm transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer"
                  :style="{
                    height: `${Math.max(
                      8,
                      getLineHeight(getMetricValue(item))
                    )}px`,
                    width: `${Math.max(
                      8,
                      getLineHeight(getMetricValue(item))
                    )}px`,
                  }"
                ></div>

                <!-- Tooltip -->
                <div
                  class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-dashboard-heading text-white text-xs rounded opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                >
                  {{ getMetricUnit() }}{{ getMetricValue(item)
                  }}{{ getMetricSuffix() }}
                </div>
              </div>

              <!-- Connecting line (except for last item) -->
              <div
                v-if="index < transactionData.length - 1"
                class="absolute top-1/2 left-1/2 w-full h-0.5 bg-brand-color-default opacity-30 transform -translate-y-1/2"
                style="z-index: 5"
              ></div>

              <!-- Time label -->
              <span class="text-xs text-dashboard-text-light font-medium">
                {{ item.time }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Stats - Matching Original Structure -->
      <div
        class="w-full bg-white rounded-lg p-4 border border-dashboard-card-border"
      >
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center">
            <p
              class="text-xs uppercase tracking-widest text-dashboard-text-light mb-1"
            >
              Total {{ getMetricLabel() }}
            </p>
            <p class="text-lg font-bold text-dashboard-heading">
              {{ getMetricUnit()
              }}{{
                selectedMetric === "volume"
                  ? (totalVolume / 1000).toFixed(1)
                  : totalCount
              }}{{ getMetricSuffix() }}
            </p>
          </div>
          <div class="text-center">
            <p
              class="text-xs uppercase tracking-widest text-dashboard-text-light mb-1"
            >
              Avg {{ getMetricLabel() }}
            </p>
            <p class="text-lg font-bold text-dashboard-heading">
              {{ getMetricUnit()
              }}{{
                selectedMetric === "volume"
                  ? averageVolume
                  : Math.round(totalCount / transactionData.length)
              }}{{ getMetricSuffix() }}
            </p>
          </div>
          <div class="text-center">
            <p
              class="text-xs uppercase tracking-widest text-dashboard-text-light mb-1"
            >
              Peak Time
            </p>
            <p class="text-lg font-bold text-dashboard-heading">
              {{
                transactionData.reduce((max, item) =>
                  getMetricValue(item) > getMetricValue(max) ? item : max
                ).time
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth transitions for data updates */
.transition-smooth {
  transition: all 0.5s ease-in-out;
}

/* Pulse animation for live data indicator */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.live-indicator {
  animation: pulse 2s infinite;
}

/* Chart hover effects */
.chart-point:hover {
  transform: scale(1.2);
  transition: transform 0.2s ease-in-out;
}

/* Ensure colors are visible */
.bg-brand-color-default {
  background-color: #00aafe !important;
}

.bg-orange-default {
  background-color: #ff5e00 !important;
}

.bg-dashboard-card-border {
  background-color: #e6e9ef !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .chart-container {
    min-height: 100px;
  }

  .metric-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
