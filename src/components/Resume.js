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
            <main className ="bg-gradient-to-l from-gray-700 via-gray-700 to-gray-800 pt-16 p-1 border-t-8 border-green-100 min-h-screen">
                <section className="relative mx-auto my-auto flex justify-center">
                    <div>
                        <Document
                            file= { res }
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <div>
                                <Page
                                    pageNumber={pageNumber} width={600} 
                                />
                            </div>
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                    </div>
                </section>
            </main>
        );
    }
}