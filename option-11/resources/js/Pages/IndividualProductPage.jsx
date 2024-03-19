import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { usePage } from "@inertiajs/react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
    Container,
    Row,
    Col,
    Button,
    Image,
    Form,
    Modal,
} from "react-bootstrap";
import ReviewProducts from '@/Pages/ReviewProducts';
import axios from 'axios';
import AnimateModal from "@/Components/AnimateModal";
import ProductPage from "@/Components/ProductPage";
export default function IndividualProductPage({ product, auth, reviews, starsAvg, commentsCount }) {


    return (
        <>
            <AnimateModal auth={auth}>
                <ProductPage product={product} auth={auth} reviews={reviews} starsAvg={starsAvg} commentsCount={commentsCount} />
            </AnimateModal>


        </>
    );
}