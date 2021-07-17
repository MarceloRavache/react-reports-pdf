# React Reports PDF

## Credits:
### pdfmake

## Install
npm i pdfmake react-reports-pdf

npm i @types/pdfmake -D

## Example of use
```
import { RelatorioPDF } from 'react-reports-pdf';


const App = () => {

  const columns:[string, string] =  ["ID","NOME"];
  const data:{}[] =  [{id:"1",name:"Teste"}];

  const {exportPDF} = RelatorioPDF({
    title:"Relatorio",
    columns: columns as any,
    data: data as any
  })

  return (
    <div>
      <button onClick={()=>exportPDF()}>GET</button>
    </div>
  );
}

export default App;
```