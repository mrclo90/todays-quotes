import axios from "axios";

async function FetchUrl(prompt: string) {

    const apiKey = process.env.REACT_APP_OPENAI_API_KEY

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'openAi-Organization': 'duddid04'
        },
        data: {
            "model": 'text-davinci-003',
            "prompt": `please give me no more than three impressional quotes for ${prompt} and where it's from as in form "" - "" and add , between each quotes`,
            "temperature": 0,
            "max_tokens": 200,
            "top_p": 1,
            "presence_penalty": 0.0,
            "stop": "/n"
        }, 
        url: "https://api.openai.com/v1/completions"
    }
    
    try{
        const response = await axios(requestOptions)
        return response.data.choices[0].text;
    } catch(error) {
        console.log(error)
    }
    
}

export default FetchUrl