var fetchUrl = require("fetch").fetchUrl;
var btoa = require("btoa");

const clientId = "e042bbd2ca284311a8e69fdda2d0e204";
const clientSecret =
    "hGX5RlCCw08tswzT19gXAkVxscXzYp1xB9LTGPcgxfYfSYUl4f1kHTvBPBoVijUr";
// http://evig.linuxpl.eu/dev/allegro/?code=nuIBKAS3CAQZJ5TPPySKVjFqFs0o7SMO

console.log(btoa(clientId + ":" + clientSecret));

// fetchUrl(
//   `https://allegro.pl/auth/oauth/token?grant_type=authorization_code&code=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTU4NzUwNzksInVzZXJfbmFtZSI6IjQ2MjAwMzA0IiwianRpIjoiMjcwZjgxZWQtOTQzNC00NTZiLTgwOTctMTQyNmFjZWQ2YjdhIiwiY2xpZW50X2lkIjoiZTA0MmJiZDJjYTI4NDMxMWE4ZTY5ZmRkYTJkMGUyMDQiLCJzY29wZSI6WyJhbGxlZ3JvX2FwaSJdfQ.qeKNVcR3ozhaqFkdnxsW2KgQWB8VkE2U-BC2b1oxMOUI8kEzmrfN-8b6bRdx7QsJ6AfHmF0AJ5TBPX0CiYEfl1-_8OO2vSBUwRG0_uz6y3X-_JIWokK8rrE_RhhxMO6wlsAzuKbzz-p-7pIKvb2thNTG7w5ELBp97EY9j2GSKyPT9VYge_avSKLPqbl86aIT7E08kM36WOMASvjPJonY3RZ-tsbZsPdZqHC701cquCO0HfU9bDmcaDlVL3TyGh-CnAzdRVprkc5Hct8-hRn9WN8k6VZBUhcMAUiOkxHvi09ejaJVqW6F0SfoF_-NFuWHxDd-6qvfbhYKHaLEtvhw-A&redirect_uri=http://evig.linuxpl.eu/dev/allegro/`,
//   {
//     method: "POST",
//     headers: {
//       Authorization: `Basic ${btoa(clientId + ":" + clientSecret)}`
//     }
//   },
//   function (error, meta, body) {
//     console.log(body.toString());
//   }
// );

fetchUrl(
    `https://api.allegro.pl/sale/offers?seller.id`,
    {
        method: "GET",
        headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTU4NzUwNzksInVzZXJfbmFtZSI6IjQ2MjAwMzA0IiwianRpIjoiMjcwZjgxZWQtOTQzNC00NTZiLTgwOTctMTQyNmFjZWQ2YjdhIiwiY2xpZW50X2lkIjoiZTA0MmJiZDJjYTI4NDMxMWE4ZTY5ZmRkYTJkMGUyMDQiLCJzY29wZSI6WyJhbGxlZ3JvX2FwaSJdfQ.qeKNVcR3ozhaqFkdnxsW2KgQWB8VkE2U-BC2b1oxMOUI8kEzmrfN-8b6bRdx7QsJ6AfHmF0AJ5TBPX0CiYEfl1-_8OO2vSBUwRG0_uz6y3X-_JIWokK8rrE_RhhxMO6wlsAzuKbzz-p-7pIKvb2thNTG7w5ELBp97EY9j2GSKyPT9VYge_avSKLPqbl86aIT7E08kM36WOMASvjPJonY3RZ-tsbZsPdZqHC701cquCO0HfU9bDmcaDlVL3TyGh-CnAzdRVprkc5Hct8-hRn9WN8k6VZBUhcMAUiOkxHvi09ejaJVqW6F0SfoF_-NFuWHxDd-6qvfbhYKHaLEtvhw-A`
        }
    },
    function (error, meta, body) {
        console.log(JSON.parse(body.toString()));
    }
);
