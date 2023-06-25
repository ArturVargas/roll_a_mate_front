import axios from 'axios';

let data: string = JSON.stringify({
    query: `query wallet {
    Wallet(input: {identity: "erikvalle.eth", blockchain: ethereum}) {
      addresses
      
    }
  }`,
    variables: {}
  });

  interface AxiosConfig {
    method: string;
    maxBodyLength: number;
    url: string;
    headers: { [key: string]: string };
    data: string;
  }
  
  let config: AxiosConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.airstack.xyz/gql',
    headers: { 
      'Authorization': '38d62a2bdf754fc788ba1451ae66cd2a', 
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });