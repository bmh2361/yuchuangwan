export function makePdfPages(count = 23){
  const pad = (n:number)=> String(n).padStart(4,'0')
  return Array.from({length:count}, (_,i)=> `/images/pdf/yuchuangwan_page-${pad(i+1)}.jpg`)
}

export const pdfPages = makePdfPages(23)