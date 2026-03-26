<!-- ABHINAV SIGN & PRINT - IMAGE & LOGO INTEGRATION GUIDE -->
<!-- This file shows how to replace placeholders with real images -->

<!-- ===== CLIENTS SECTION EXAMPLES ===== -->

<!-- CURRENT (with placeholders) -->
<!--
<div class="client-logo">
    <div class="client-placeholder">AMUL MILK</div>
</div>
-->

<!-- UPDATED (with real images) -->
<!--
<div class="client-logo">
    <img src="images/amul-milk-logo.png" alt="Amul Milk - Regular Client">
</div>

<div class="client-logo">
    <img src="images/krs-group-logo.png" alt="KRS Group - Regular Client">
</div>

<div class="client-logo">
    <img src="images/alimco-logo.png" alt="ALIMCO - Regular Client">
</div>

<div class="client-logo">
    <img src="images/hype-gym-logo.png" alt="Hype The Gym - Regular Client">
</div>

<div class="client-logo">
    <img src="images/redission-blue-logo.png" alt="Redission Blue - Regular Client">
</div>

<div class="client-logo">
    <img src="images/amrita-hospital-logo.png" alt="Amrita Hospital - Regular Client">
</div>
-->

<!-- ===== SERVICE/MACHINE SECTION EXAMPLES ===== -->

<!-- CURRENT (with emoji placeholders) -->
<!--
<div class="service-image">🖨️ UV Printer</div>
<div class="service-image">🔧 CNC Router</div>
<div class="service-image">✨ CO2 Laser</div>
<div class="service-image">⚡ Spot Welding</div>
<div class="service-image">🔨 Channel Bending</div>
<div class="service-image">💡 LED Boards</div>
-->

<!-- UPDATED (with real machinery photos) -->
<!--
<img src="images/uv-printer-machine.jpg" alt="UV Printing Machine" class="service-image">
<img src="images/cnc-router-machine.jpg" alt="CNC Router Machine" class="service-image">
<img src="images/co2-laser-machine.jpg" alt="CO2 Laser Machine" class="service-image">
<img src="images/spot-welding-machine.jpg" alt="Spot Welding Machine" class="service-image">
<img src="images/channel-bending-machine.jpg" alt="Channel & Steel Bending Machine" class="service-image">
<img src="images/led-boards-display.jpg" alt="LED Light Boards" class="service-image">
-->

<!-- ===== FOLDER STRUCTURE NEEDED ===== -->
<!--
c:\Users\anmis\Desktop\asprint\
│
├── index.html (main website)
├── README.md
├── MACHINE_SPECIFICATIONS.md
├── QUICK_START.md
├── IMAGE_INTEGRATION_EXAMPLES.md (this file)
│
└── images/ (create this folder)
    ├── amul-milk-logo.png
    ├── alimco-logo.png
    ├── hype-gym-logo.png
    ├── redission-blue-logo.png
    ├── amrita-hospital-logo.png
    ├── krs-group-logo.png
    ├── uv-printer-machine.jpg
    ├── cnc-router-machine.jpg
    ├── co2-laser-machine.jpg
    ├── spot-welding-machine.jpg
    ├── channel-bending-machine.jpg
    └── led-boards-display.jpg
-->

<!-- ===== CLIENT LOGO DETAILS ===== -->
<!--
Logo Information for Abhinav Sign & Print:

1. KRS GROUP (shown in quote letterhead)
   - A sun and water wave design
   - Orange and blue colors
   - Located in the office/quote
   - File: krs-group-logo.png or logo.jpg

2. MSME (Micro, Small & Medium Enterprises)
   - Government organization logo
   - File: msme-logo.png

3. AMUL MILK
   - Famous Indian dairy brand
   - Red and white colors
   - File: amul-milk-logo.png

4. ALIMCO (Artificial Limbs Manufacturing Corporation)
   - Government organization
   - Healthcare/medical sector
   - File: alimco-logo.png

5. HYPE THE GYM
   - Fitness center
   - Modern text-based logo
   - File: hype-gym-logo.png

6. REDISSION BLUE
   - Real estate/construction company
   - Modern design
   - File: redission-blue-logo.png

7. AMRITA HOSPITAL
   - Healthcare provider
   - Medical institution
   - File: amrita-hospital-logo.png
-->

<!-- ===== IMAGE SIZE RECOMMENDATIONS ===== -->
<!--
LOGO IMAGES:
- Size: 200x150px to 300x200px
- Format: PNG (for transparency) or JPG
- File size: 20-100KB each
- Background: Can be transparent or white

MACHINERY IMAGES:
- Size: 800x600px or 1200x800px
- Format: JPG (for photos)
- File size: 100-300KB each
- Quality: High resolution for professional appearance
- Style: Product photography or official machine photos

OPTIMAL FILE NAMING:
- Use hyphens, not spaces
- lowercase letters
- Descriptive names
- Examples:
  * amul-milk-logo.png ✓
  * Amul Milk Logo.png ✗
  * uv-printer-machine.jpg ✓
  * UV Printer.jpg ✗
-->

<!-- ===== STEP-BY-STEP IMPLEMENTATION ===== -->

<!--
STEP 1: Create images folder
- Right-click on asprint folder
- New → Folder
- Name it "images"

STEP 2: Obtain images
- For logos: Search "brand name logo" on Google Images
- For machines: Find similar machine photos online or take your own
- Download or save images to your computer

STEP 3: Rename and organize
- Rename images according to the naming convention above
- Place all images in the images/ folder

STEP 4: Update HTML
- Open index.html in text editor
- Find the service card sections (around line 300)
- Replace emoji placeholders with img tags
- Find the clients section (around line 580)
- Replace placeholder divs with img tags

STEP 5: Test
- Save index.html
- Open in browser
- Check that all images load correctly
- Verify responsive design on mobile

STEP 6: Optimize
- Ensure all images are under 500KB
- Consider using image compression tools
- Verify loading speed
-->

<!-- ===== COMPLETE REPLACEMENT EXAMPLE ===== -->

<!-- ORIGINAL SERVICE CARD -->
<!--
<div class="service-card">
    <div class="service-image">🖨️ UV Printer</div>
    <div class="service-content">
        <h3>UV Printing</h3>
        <p>Advanced UV printing technology for high-quality direct printing on various surfaces.</p>
        ...
    </div>
</div>
-->

<!-- UPDATED SERVICE CARD WITH IMAGE -->
<!--
<div class="service-card">
    <div class="service-image" style="background-image: url('images/uv-printer-machine.jpg'); background-size: cover;">
        <img src="images/uv-printer-machine.jpg" alt="UV Printing Machine" style="width: 100%; height: 100%; object-fit: cover; display: none;">
    </div>
    <div class="service-content">
        <h3>UV Printing</h3>
        <p>Advanced UV printing technology for high-quality direct printing on various surfaces.</p>
        ...
    </div>
</div>

OR (simpler version):

<div class="service-card">
    <img src="images/uv-printer-machine.jpg" alt="UV Printing Machine" class="service-image">
    <div class="service-content">
        <h3>UV Printing</h3>
        <p>Advanced UV printing technology for high-quality direct printing on various surfaces.</p>
        ...
    </div>
</div>
-->

<!-- ===== COMPANY LOGO PLACEMENT ===== -->

<!-- Current Header (around line 130) -->
<!--
<div class="logo">
    <div class="logo-icon">ASP</div>
    <span>Abhinav Sign & Print</span>
</div>
-->

<!-- Updated with company logo image -->
<!--
<div class="logo">
    <img src="images/company-logo.png" alt="Abhinav Sign & Print" style="height: 40px; margin-right: 10px;">
    <span>Abhinav Sign & Print</span>
</div>
-->

<!-- ===== RESPONSIVE IMAGE CSS (if needed) ===== -->

<!--
Add this to the style section if you need to adjust image responsiveness:

.service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.client-logo img {
    max-width: 90%;
    max-height: 120px;
    object-fit: contain;
    display: block;
}
-->

<!-- ===== BROWSER COMPATIBILITY ===== -->

<!--
Image formats supported by all browsers:
✓ JPG/JPEG - Best for photos
✓ PNG - Best for logos with transparency
✓ WebP - Modern format (supported in latest browsers)
✓ GIF - For animated images

Avoid:
✗ BMP - Large file sizes
✗ TIFF - Not web-standard
✗ SVG from Illustrator - May have compatibility issues

Recommended: Use PNG for logos, JPG for machine photos
-->

<!-- ===== PERFORMANCE OPTIMIZATION ===== -->

<!--
1. Image Compression
   - Use TinyPNG (tinypng.com) to reduce file size
   - Typical compression: 30-60% reduction
   - No visible quality loss

2. Lazy Loading (for faster page load)
   - Add loading="lazy" to img tags
   - Images load only when needed
   - Example: <img src="..." loading="lazy">

3. Responsive Images (for different devices)
   - Use srcset for multiple image sizes
   - Browser chooses best version
   - Example:
     <img src="small.jpg"
          srcset="small.jpg 500w, large.jpg 1000w"
          alt="Description">

4. WebP Format (modern optimization)
   - 25-35% smaller than PNG/JPG
   - Supported by modern browsers
   - Example:
     <picture>
         <source srcset="image.webp" type="image/webp">
         <img src="image.jpg" alt="Description">
     </picture>
-->

<!-- ===== TIPS FOR FINDING IMAGES ===== -->

<!--
For Machinery Images:
1. Search on manufacturer websites
2. Visit company gallery/portfolio pages
3. Use Google Image search with filters
4. Take photos of your own machines if available
5. Request press photos from manufacturers

Recommended Search Queries:
- "UV printer machine industrial photo"
- "CNC router machine professional"
- "CO2 laser cutting machine"
- "spot welding machine industrial"
- "channel letter bending machine"
- "LED display boards commercial"

For Client Logos:
1. Official company websites (About/Logo page)
2. Google search: "[Company Name] logo"
3. LinkedIn company pages
4. Business directories
5. Press kits or media pages

Always verify you have rights to use images!
-->

<!-- ===== FREQUENTLY ASKED QUESTIONS ===== -->

<!--
Q: Where do I put image files?
A: Create an "images" folder in c:\Users\anmis\Desktop\asprint\
   Then place all images there.

Q: What if my image doesn't display?
A: 1. Check file path is correct
   2. Verify filename spelling (case-sensitive on some systems)
   3. Check file is in correct location
   4. Try different format (PNG instead of JPG)

Q: Can I use images from Google Images?
A: Only if you have rights (Creative Commons, public domain)
   Better: Use official company logos from their websites

Q: What size should images be?
A: Logos: 200-300px wide
   Machines: 800-1200px wide
   File size: Keep under 500KB for fast loading

Q: Should I use PNG or JPG?
A: PNG for logos (transparent background)
   JPG for photographs (smaller file size)

Q: How do I compress images?
A: Use tinypng.com or similar online tool
   Reduces file size 30-60% without quality loss

Q: Can I use SVG images?
A: Yes, if properly formatted
   Best for logos and graphics
   Smaller file size, scalable quality
-->

<!-- ===== DIRECT REPLACEMENT CODE ===== -->

<!-- To quickly update the website, find and replace these sections: -->

<!-- SEARCH FOR THIS (Service Cards Section) -->
<!--
            <div class="service-card">
                    <div class="service-image">🖨️ UV Printer</div>
-->

<!-- REPLACE WITH THIS -->
<!--
            <div class="service-card">
                    <img src="images/uv-printer-machine.jpg" alt="UV Printer Machine" style="width: 100%; height: 250px; object-fit: cover; border-radius: 10px 10px 0 0;">
-->

<!-- DO THE SAME FOR ALL 6 MACHINES IN THE SERVICE SECTION -->

<!-- FOR CLIENTS SECTION -->

<!-- SEARCH FOR THIS -->
<!--
            <div class="client-logo">
                <div class="client-placeholder">AMUL MILK</div>
            </div>
-->

<!-- REPLACE WITH THIS -->
<!--
            <div class="client-logo">
                <img src="images/amul-milk-logo.png" alt="Amul Milk">
            </div>
-->

<!-- UPDATE ALL 6 CLIENT PLACEHOLDERS SIMILARLY -->

<!-- ===== END OF INTEGRATION GUIDE ===== -->
