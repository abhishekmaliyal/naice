
**NAICE** is a minimal countdown timer that displays the real-time remaining time until a fun and futuristic date: *wink wink*

🗓 **Wednesday, November 10, 2190 – 18:56:09 GMT** (UTC Timestamp: `6969696969`)

🔗 **Live Demo:** [naice.netlify.app](https://naice.netlify.app)

---

## 📸 Preview

![Countdown Screenshot](https://raw.githubusercontent.com/abhishekmaliyal/naice/refs/heads/main/public/naice-preview.png)

---

## 🚀 Features

- ⏲️ Real-time countdown updates every second
- 📆 Breakdown of remaining **days, hours, minutes, and seconds**
- 🧮 Total time left in **hours, minutes, and seconds**
- 🌓 Dark mode support with toggle
- 🔄 Tab-based layout to switch views easily
- 📱 Fully responsive design for all devices

---

## 🛠️ Tech Stack

| Technology       | Purpose                               |
|------------------|----------------------------------------|
| **Next.js 15**   | Full-stack React framework             |
| **React 19**     | UI rendering and state management      |
| **Tailwind CSS v4** | Utility-first CSS styling framework   |
| **Context API**  | Global state for countdown timer       |
| **Netlify**      | Hosting and continuous deployment      |

---

## ⚙️ How It Works

1. The app uses **Unix time** to count down from the future timestamp `6969696969`.
2. A **React Context** provides the countdown values to any component.
3. The **UI updates every second** using `setInterval` inside a `useEffect`.
4. **Tabs** let users switch between full breakdown and compact views.
5. Hosted with **Netlify** for blazing-fast global delivery.

---

## 💻 Installation & Setup

Follow these steps to run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/abhishekmaliyal/naice.git
```

2. Navigate into the project directory

```bash
cd naice
```

3. Install Dependencies

```bash
npm install
```

4. Start the dev server

```bash
npm run dev
```

5. Open your browser and visit

```bash
http://localhost:3000
```