export default function formatDate(isoString) {
    if (!isoString) return "Invalid date";

    console.log(isoString)

    const date = new Date(isoString);

    if (isNaN(date.getTime())) return "Invalid date";

    // Format day as two digits (e.g., 04)
    const day = String(date.getUTCDate()).padStart(2, "0");

    // Format month as full name
    const month = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });

    // Get the year
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
}
