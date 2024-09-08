import PDFDocument from 'pdfkit';
import fs from 'fs';

export function gerarRelatorio(resultado) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('relatorio_recintos.pdf'));

  doc.fontSize(20).text('Relatório de Alocação de Animais', { align: 'center' });
  doc.fontSize(12).text(`Recintos viáveis: ${JSON.stringify(resultado.recintosViaveis)}`, { align: 'left' });

  if (resultado.erro) {
    doc.fontSize(12).text(`Erro: ${resultado.erro}`, { align: 'left', color: 'red' });
  }

  doc.end();
}
