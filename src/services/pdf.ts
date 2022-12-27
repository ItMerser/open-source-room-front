import html2canvas from 'html2canvas'
import {jsPDF} from 'jspdf'

export const getPDFPage = (elementId: string, downloadedFileName: string) => {
    return () => {
        const page = document.getElementById(elementId)
        if (page) {
            html2canvas(page).then(canvas => {
                const imageData = canvas.toDataURL('image/png')
                const pdf = new jsPDF('p', 'pt', 'a4')
                const pdfWidth = pdf.internal.pageSize.getWidth()
                const pdfHeight = pdf.internal.pageSize.getHeight()
                pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight)
                pdf.save(downloadedFileName)
            })
        }
    }
}