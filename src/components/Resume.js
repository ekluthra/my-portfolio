import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import res from "../Ekagra-Luthra.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class Resume extends Component {
    state = { numPages: null, pageNumber:1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      };
    
    goToPrevPage = () =>
      this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
      this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
    
    render() {
    const { pageNumber, numPages } = this.state;
  
        return (
            <div className="bg-red-100 flex items-center min-h-screen container mx-auto">
           
                <Document className="flex items-center"
                    file= { res }
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page className="object-cover flex items-center"
                        pageNumber={pageNumber} width={600} 
                    />
                </Document>

            </div>
        );
    }
}