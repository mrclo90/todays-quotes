import React from "react"
import {useForm} from "react-hook-form"
import styled from 'styled-components';
import { DataFromAi } from "../atom";
import "../style/globalStyle.css"
import {useRecoilState} from "recoil"
import FetchUrl from "../API/fetchUrl";

const Wrapper = styled.div`
  margin-top: 30px;
  width: 300px;
`

function App() {

  const Input = styled.input`
    width: 200px;
    height: 20%;
  `
  const [quote, setQuote] = useRecoilState(DataFromAi)
  const {register, handleSubmit} = useForm()
  const quotes = quote.split(",")

  const onSubmit = async (data: any) => {
    console.log(data.request)
    const chatResponse = await FetchUrl(data.request)
    console.log(chatResponse)
    setQuote(chatResponse)
  }

  return(
    <div>
      <h1>Find the Quote you want to refer</h1>
      <p style={{textAlign: "center"}}>
        Enter the keyword and find impressional quotes! <br/>It will give you five quotes with its reference. <br/>Now, enter the keyword!
      </p>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <Input id="request" type="text" {...register("request", {required: true})}/>
        <input type="submit" value="search"/>
      </form>
      <div>
        <Wrapper>
          {quote!=="" ? quotes.map((quote, index: number) => 
            <ul key={index}>
              <li>{quote}</li>
            </ul>
          ) : ""}
        </Wrapper>
      </div>
    </div>
  )
}

export default App;