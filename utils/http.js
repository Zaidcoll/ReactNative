import axios from "axios";

const BACKEND_URL = "http://vivipos.net:3117/vivipos/get_sales_direct?ref1=";

const header = {
  "Access-Control-Allow-Origin":"*",
  "x-machine-id": "FECTerminal",
  "x-client": "vivipos",
  "x-api-key": "$2a$12$lbDOLbIoMdG/J5ogW54j3.4mjVUOy0zaDZ0fMKtcmF9IM3Uhoa3Cm",
  "x-company": "17",
  "x-outletid": "2ddace2e-017a-4b86-b9fb-5a608f7395c6"
}

export async function fetchQrCode(ref1){
    console.log('doing fetch from http')
    const response = await axios({
        method: "GET",
        url: BACKEND_URL + ref1,
        headers: header
    })
    return response.data
}

export async function uploadSalesApi(sales_data){
  const syncOptions = {
    hostname:"vivipos.net",
    path: '/' + "onlineorderapi" + '/kiosks/importSalesData',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-client': 'kiosk',
      'x-machine-id': "FECTerminal"
  }
  }
  
  let postData = JSON.stringify(sales_data);
  const response = await axios(syncOptions,postData);
  console.log(response.data)
}