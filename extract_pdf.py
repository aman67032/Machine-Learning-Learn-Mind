import pdfplumber
import os

# Extract text from PDF
pdf_path = 'public/pdf/main_notes.pdf'
output_dir = 'extracted_pdf'
os.makedirs(output_dir, exist_ok=True)

with pdfplumber.open(pdf_path) as pdf:
    print(f"Total pages: {len(pdf.pages)}")
    
    all_text = []
    for i, page in enumerate(pdf.pages):
        text = page.extract_text()
        if text:
            all_text.append(f"=== PAGE {i+1} ===\n{text}\n")
        
        # Extract images
        images = page.images
        if images:
            print(f"Page {i+1}: {len(images)} images found")
    
    # Write extracted text to file
    with open(f'{output_dir}/content.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(all_text))
    
    print(f"\nText saved to {output_dir}/content.txt")
    
    # Print first 5 pages for preview
    for i in range(min(10, len(pdf.pages))):
        text = pdf.pages[i].extract_text()
        if text:
            print(f"\n--- Page {i+1} ---")
            print(text[:1500])
