
export async function callHTTPCustomeEvent(eventName: string){

    const url = `https://www.google-analytics.com/mp/collect?api_secret=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_API_SECRET}&measurement_id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`

    window.gtag('get', 'UA-XXXXXXXX-Y', 'client_id', async (clientID: string) => {
        try {
            await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    client_id: clientID,
                    events: [
                        {
                            name: eventName,
                            params: {}
                        }
                    ]
                })
            })
        } catch (error) {
            console.log(error)
        }
      })

}