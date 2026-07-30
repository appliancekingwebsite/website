import sharp from "sharp";

const width = 1200;
const height = 630;
const logo = await sharp("public/appliance-king-logo.png")
  .resize({ width: 480, height: 480, fit: "contain" })
  .png()
  .toBuffer();

await sharp("public/appliance-king-logo.png")
  .resize({ width: 720, height: 720, fit: "contain" })
  .webp({ quality: 86, effort: 5 })
  .toFile("public/appliance-king-logo.webp");

const overlay = Buffer.from(`
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#070707"/>
    <rect x="0" y="0" width="18" height="630" fill="#a20e27"/>
    <path d="M42 64H650M42 566H1158" stroke="#333" stroke-width="2"/>
    <text x="70" y="150" fill="#a20e27" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="700" letter-spacing="5">MACON, GEORGIA</text>
    <text x="70" y="260" fill="#fff" font-family="Arial Narrow, Arial, sans-serif" font-size="78" font-weight="900">APPLIANCE</text>
    <text x="70" y="340" fill="#fff" font-family="Arial Narrow, Arial, sans-serif" font-size="78" font-weight="900">REPAIR</text>
    <text x="70" y="405" fill="#9c9c9c" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="600">BUY · SELL · FIX</text>
    <text x="70" y="520" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700">478-273-7539</text>
    <rect x="684" y="64" width="474" height="502" fill="#000" stroke="#333" stroke-width="2"/>
    <path d="M714 94H1128V536H714Z" fill="none" stroke="#1d1d1d"/>
  </svg>
`);

await sharp({
  create: {
    width,
    height,
    channels: 3,
    background: "#070707",
  },
})
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: 75, left: 681 },
  ])
  .jpeg({ quality: 90, chromaSubsampling: "4:4:4" })
  .toFile("public/og-image.jpg");
