import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList
} from "recharts";

const foodDeliveryMarketData = [
  {
    platform: "Grab",
    marketShare: 40,
    userAdoption: 54
  },
  {
    platform: "LINE MAN",
    marketShare: 44,
    userAdoption: 49
  },
  {
    platform: "Foodpanda",
    marketShare: 10,
    userAdoption: 0
  },
  {
    platform: "1112Delivery",
    marketShare: 5,
    userAdoption: 12
  }
];

const foodDeliveryData = [
  {
    platform: "Grab",
    reviewSentimentAppStore: 88,
    reviewSentimentGooglePlay: 86,
    reviewVolumeAppStore: 120000,
    reviewVolumeGooglePlay: 150000,
    reviewHighlight: "Service works great, but the price is higher than competitors."
  },
  {
    platform: "LINE MAN",
    reviewSentimentAppStore: 85,
    reviewSentimentGooglePlay: 83,
    reviewVolumeAppStore: 80000,
    reviewVolumeGooglePlay: 95000,
    reviewHighlight: "Lots of promotions, great restaurant choices, sometimes lags."
  },
  {
    platform: "Foodpanda",
    reviewSentimentAppStore: 72,
    reviewSentimentGooglePlay: 68,
    reviewVolumeAppStore: 50000,
    reviewVolumeGooglePlay: 80000,
    reviewHighlight: "UI is convenient, but delivery is often late."
  },
  {
    platform: "1112Delivery",
    reviewSentimentAppStore: 81,
    reviewSentimentGooglePlay: 78,
    reviewVolumeAppStore: 10000,
    reviewVolumeGooglePlay: 12000,
    reviewHighlight: "Food quality is great, but limited choice."
  }
];

const taxiData = [
  {
    platform: "Grab",
    reviewSentimentAppStore: 88,
    reviewSentimentGooglePlay: 86,
    reviewVolumeAppStore: 120000,
    reviewVolumeGooglePlay: 150000,
    reviewHighlight: "Reliable for rides, but surge pricing is common."
  },
  {
    platform: "LINE MAN",
    reviewSentimentAppStore: 85,
    reviewSentimentGooglePlay: 83,
    reviewVolumeAppStore: 80000,
    reviewVolumeGooglePlay: 95000,
    reviewHighlight: "Taxi service is okay, but app performance needs improvement."
  },
  {
    platform: "Maxim",
    reviewSentimentAppStore: 69,
    reviewSentimentGooglePlay: 67,
    reviewVolumeAppStore: 15000,
    reviewVolumeGooglePlay: 35000,
    reviewHighlight: "Very affordable taxi fares, but waiting time is long."
  },
  {
    platform: "Gojek",
    reviewSentimentAppStore: 67,
    reviewSentimentGooglePlay: 63,
    reviewVolumeAppStore: 25000,
    reviewVolumeGooglePlay: 40000,
    reviewHighlight: "App crashes occasionally, drivers polite."
  },
  {
    platform: "Bolt",
    reviewSentimentAppStore: 78,
    reviewSentimentGooglePlay: 75,
    reviewVolumeAppStore: 30000,
    reviewVolumeGooglePlay: 60000,
    reviewHighlight: "Cheap and fast, but inconsistent driver availability."
  },
  {
    platform: "TADA",
    reviewSentimentAppStore: 74,
    reviewSentimentGooglePlay: 72,
    reviewVolumeAppStore: 10000,
    reviewVolumeGooglePlay: 20000,
    reviewHighlight: "Fair pricing model and friendly drivers, but app can lag."
  },
  {
    platform: "Uber",
    reviewSentimentAppStore: 76,
    reviewSentimentGooglePlay: 70,
    reviewVolumeAppStore: 90000,
    reviewVolumeGooglePlay: 85000,
    reviewHighlight: "Service quality is good, but price is sometimes too high."
  }
];

// Keyword-based sentiment dimensions for food delivery
const keywordSentimentData = [
  {
    category: "Price",
    Grab: 68,
    "LINE MAN": 72,
    Foodpanda: 65,
    "1112Delivery": 70
  },
  {
    category: "Speed",
    Grab: 75,
    "LINE MAN": 78,
    Foodpanda: 66,
    "1112Delivery": 73
  },
  {
    category: "Choices",
    Grab: 80,
    "LINE MAN": 85,
    Foodpanda: 70,
    "1112Delivery": 60
  },
  {
    category: "Suggestions",
    Grab: 77,
    "LINE MAN": 83,
    Foodpanda: 68,
    "1112Delivery": 55
  }
];

// Keyword-based sentiment dimensions for taxi apps
const keywordSentimentTaxi = [
  {
    category: "Price",
    Grab: 65,
    "LINE MAN": 68,
    Maxim: 80,
    Gojek: 72,
    Bolt: 85,
    TADA: 78,
    Uber: 60
  },
  {
    category: "Speed",
    Grab: 72,
    "LINE MAN": 75,
    Maxim: 65,
    Gojek: 70,
    Bolt: 78,
    TADA: 74,
    Uber: 69
  },
  {
    category: "Choices",
    Grab: 78,
    "LINE MAN": 74,
    Maxim: 60,
    Gojek: 62,
    Bolt: 70,
    TADA: 68,
    Uber: 76
  },
  {
    category: "Suggestions",
    Grab: 70,
    "LINE MAN": 73,
    Maxim: 55,
    Gojek: 60,
    Bolt: 65,
    TADA: 66,
    Uber: 71
  }
];

// Sentiment trend data across 2023–2024 (Food)
const sentimentTrendData = [
  { platform: "Grab", y2023: 85, y2024: 88 },
  { platform: "LINE MAN", y2023: 82, y2024: 85 },
  { platform: "Foodpanda", y2023: 74, y2024: 72 },
  { platform: "1112Delivery", y2023: 79, y2024: 81 }
];

// Sentiment trend data across 2023–2024 (Taxi)
const sentimentTrendTaxi = [
  { platform: "Grab", y2023: 82, y2024: 85 },
  { platform: "LINE MAN", y2023: 80, y2024: 83 },
  { platform: "Maxim", y2023: 68, y2024: 71 },
  { platform: "Bolt", y2023: 75, y2024: 78 },
  { platform: "Uber", y2023: 69, y2024: 70 }
];

export function CompetitorReview() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Thailand Food Delivery Market Share (H1 2024)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={foodDeliveryMarketData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="platform" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="marketShare" fill="#8884d8" name="Market Share (%)">
            <LabelList dataKey="marketShare" position="top" />
          </Bar>
          <Bar dataKey="userAdoption" fill="#82ca9d" name="User Adoption (%)">
            <LabelList dataKey="userAdoption" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <h2 className="text-xl font-bold mt-12 mb-4">Food Delivery App Review Sentiment (2022–2024)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={foodDeliveryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="platform" />
          <YAxis domain={[60, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="reviewSentimentAppStore" stroke="#82ca9d" name="App Store Sentiment (%)" />
          <Line type="monotone" dataKey="reviewSentimentGooglePlay" stroke="#ff7f50" name="Google Play Sentiment (%)" />
        </LineChart>
      </ResponsiveContainer>

      <h3 className="text-lg font-semibold mt-8 mb-2">💬 Food Delivery Feedback</h3>
      <ul className="list-disc pl-6 text-sm">
        {foodDeliveryData.map((entry) => (
          <li key={entry.platform}>
            <strong>{entry.platform}:</strong> {entry.reviewHighlight} (<em>{entry.reviewVolumeAppStore.toLocaleString()} App Store, {entry.reviewVolumeGooglePlay.toLocaleString()} Google Play reviews</em>)
          </li>
        ))}
      </ul>

      {/* Keyword-based sentiment chart (Food) */}
      <h2 className="text-xl font-bold mt-12 mb-4">📊 Sentiment by Feature Keywords – Food Delivery (2024)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={keywordSentimentData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="category" />
          <YAxis domain={[50, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Grab" fill="#6366f1">
            <LabelList dataKey="Grab" position="top" />
          </Bar>
          <Bar dataKey="LINE MAN" fill="#10b981">
            <LabelList dataKey="LINE MAN" position="top" />
          </Bar>
          <Bar dataKey="Foodpanda" fill="#f97316">
            <LabelList dataKey="Foodpanda" position="top" />
          </Bar>
          <Bar dataKey="1112Delivery" fill="#ef4444">
            <LabelList dataKey="1112Delivery" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* LEGEND for keyword sentiment */}
      <div className="mt-6 text-sm">
        <h4 className="font-semibold mb-2">🗂️ Keyword Legend</h4>
        <table className="table-auto border text-left text-xs">
          <thead>
            <tr>
              <th className="px-2 py-1 border">Category</th>
              <th className="px-2 py-1 border">Keywords to Monitor</th>
              <th className="px-2 py-1 border">Sample Meaning in Reviews</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-1 border">Price</td>
              <td className="px-2 py-1 border">expensive, overpriced, cheap, "แพง", "ราคาถูก"</td>
              <td className="px-2 py-1 border">Value-for-money perception</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border">Speed</td>
              <td className="px-2 py-1 border">fast delivery, slow, late, "ช้า", "ไว"</td>
              <td className="px-2 py-1 border">Delivery speed and punctuality</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border">Choices</td>
              <td className="px-2 py-1 border">many restaurants, variety, "ร้านเยอะ", "ตัวเลือกเยอะ"</td>
              <td className="px-2 py-1 border">Range of restaurant/merchant partners</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border">Suggestions</td>
              <td className="px-2 py-1 border">recommended, best picks, algorithm, "แนะนำ", "ตรงใจ"</td>
              <td className="px-2 py-1 border">Whether app recommendations are relevant</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 text-xs italic text-gray-600">
          <p><strong>Price (e.g. Grab = 68):</strong> Indicates that users often feel prices are somewhat high or less competitive. Score in the 60s suggests mixed perception on value-for-money.</p>
          <p><strong>Speed (e.g. Grab = 75):</strong> Suggests most users find delivery relatively quick, though not top-tier. Ratings above 70 indicate general satisfaction with delivery time.</p>
          <p><strong>Choices (e.g. Grab = 80):</strong> Reflects strong user approval of the number of restaurants or merchants. Scores in the 80s indicate a wide variety that users appreciate.</p>
          <p><strong>Suggestions (e.g. Grab = 77):</strong> Users feel recommendations are often relevant. Scores in the mid-70s to 80s show algorithms meet expectations for personalization.</p>
        </div>
      </div>

      {/* Sentiment trend line chart */}
      <h2 className="text-xl font-bold mt-12 mb-4">📈 Sentiment Trend: 2023 vs 2024</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sentimentTrendData}>
          <XAxis dataKey="platform" />
          <YAxis domain={[60, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y2023" stroke="#a5b4fc" name="2023">
            <LabelList dataKey="y2023" position="top" />
          </Line>
          <Line type="monotone" dataKey="y2024" stroke="#6366f1" name="2024">
            <LabelList dataKey="y2024" position="top" />
          </Line>
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 text-xs italic text-gray-600">
        <p><strong>📊 Explanation:</strong> Positive sentiment trend means user feedback has improved year-over-year. For example, Grab's score increasing from 85 → 88 shows enhanced user perception, while a drop (e.g., Foodpanda 74 → 72) may reflect more recent frustrations.</p>
      </div>

      <h2 className="text-xl font-bold mt-12 mb-4">Thailand Taxi Platforms (H1 2024)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={taxiData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="platform" />
          <YAxis domain={[60, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="reviewSentimentAppStore" stroke="#8884d8" name="App Store Sentiment (%)" />
          <Line type="monotone" dataKey="reviewSentimentGooglePlay" stroke="#ffa500" name="Google Play Sentiment (%)" />
        </LineChart>
      </ResponsiveContainer>

      <h3 className="text-lg font-semibold mt-8 mb-2">💬 Taxi Service Feedback</h3>
      <ul className="list-disc pl-6 text-sm">
        {taxiData.map((entry) => (
          <li key={entry.platform}>
            <strong>{entry.platform}:</strong> {entry.reviewHighlight} (<em>{entry.reviewVolumeAppStore.toLocaleString()} App Store, {entry.reviewVolumeGooglePlay.toLocaleString()} Google Play reviews</em>)
          </li>
        ))}
      </ul>

      {/* Keyword-based sentiment chart (Taxi) */}
      <h2 className="text-xl font-bold mt-12 mb-4">🚖 Sentiment by Feature Keywords – Taxi Apps (2024)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={keywordSentimentTaxi} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="category" />
          <YAxis domain={[50, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Grab" fill="#6366f1" />
          <Bar dataKey="LINE MAN" fill="#10b981" />
          <Bar dataKey="Maxim" fill="#facc15">
            <LabelList dataKey="Maxim" position="top" />
          </Bar>
          <Bar dataKey="Gojek" fill="#fb923c">
            <LabelList dataKey="Gojek" position="top" />
          </Bar>
          <Bar dataKey="Bolt" fill="#4ade80">
            <LabelList dataKey="Bolt" position="top" />
          </Bar>
          <Bar dataKey="TADA" fill="#06b6d4">
            <LabelList dataKey="TADA" position="top" />
          </Bar>
          <Bar dataKey="Uber" fill="#9ca3af">
            <LabelList dataKey="Uber" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 text-xs italic text-gray-600">
        <p><strong>Price (e.g. Bolt = 85):</strong> Indicates users find the platform very affordable or competitively priced.</p>
        <p><strong>Speed (e.g. Grab = 72):</strong> Reflects good delivery/pickup time, with room for minor improvement.</p>
        <p><strong>Choices (e.g. Uber = 76):</strong> Suggests wide driver or area coverage, helpful for availability.</p>
        <p><strong>Suggestions (e.g. TADA = 66):</strong> Reflects moderate satisfaction with route, promo, or app recs.</p>
      </div>

      {/* Sentiment trend line chart (Taxi) */}
      <h2 className="text-xl font-bold mt-12 mb-4">📈 Sentiment Trend: Taxi Apps 2023 vs 2024</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sentimentTrendTaxi}>
          <XAxis dataKey="platform" />
          <YAxis domain={[60, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y2023" stroke="#a5b4fc" name="2023" />
          <Line type="monotone" dataKey="y2024" stroke="#6366f1" name="2024" />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 text-xs italic text-gray-600">
        <p><strong>🚖 Explanation:</strong> Trends reflect whether users are increasingly satisfied with services. Consistent rises (e.g., Bolt +3) indicate improved performance or perception, while stagnant or declining scores signal areas needing attention.</p>
      </div>
    </div>
  );
}