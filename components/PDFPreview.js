function PDFPreview({ pdfUrl }) {
    return (
      <div class="left">
        <iframe title="preview" src={pdfUrl} height="300" width="400"/>
      </div>
    );
  }
  
  export default PDFPreview;
  