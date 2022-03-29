import React, {useState} from 'react';

import '../styles/DeliveryFeeCalculator.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Form} from "react-bootstrap";
import Input from "./Input";
import calculateDeliveryFee from "../util/Calculator";

function DeliveryFeeCalculator() {

    const [price, setPrice] = useState(0)

    const [inputs, setInputs] = useState({cartValue: '', deliveryDistance: '', items: '', orderTime: ''});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id;
        const value = event.target.value;
        setInputs(values => ({...values, [id]: value}))
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const cart = parseFloat(inputs.cartValue) || 0
        const distance = parseInt(inputs.deliveryDistance) || 0
        const itemsAmount = parseInt(inputs.items) || 0
        const today = new Date(inputs.orderTime)
        try{
            setPrice(calculateDeliveryFee(cart, distance, itemsAmount, today))
        }catch (e) {
            alert('Calculating delivery price failed')
            console.error(e)
        }

    }


    return (
        <Form onSubmit={onSubmit}>
            <div className={'CalculatorContainer'}>
                <h2>Delivery fee calculator</h2>

                <Input label={'Cart value'}
                       type={'number'}
                       id={'cartValue'}
                       onChange={handleChange}
                       min={0}
                       placeholder={'Cart value'}
                       addOn={'€'}/>

                <Input label={'Delivery distance'}
                       type={'number'}
                       id={'deliveryDistance'}
                       onChange={handleChange}
                       min={0}
                       placeholder={'Delivery distance'}
                       addOn={'m'}/>

                <Input label={'Amount of items'}
                       type={'number'}
                       id={'items'}
                       onChange={handleChange}
                       min={0}
                       placeholder={'Amount of items'}/>

                <Input label={'Time'}
                       type={'datetime-local'}
                       id={'orderTime'}
                       onChange={handleChange}
                />

                <Button type="submit">Calculate delivery price</Button>

                <b>{`Delivery price: ${price}€`}</b>
            </div>
        </Form>

    );
}

export default DeliveryFeeCalculator;