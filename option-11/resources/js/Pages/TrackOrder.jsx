
import { InertiaLink } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import NavBar from "@/Components/NavBar";
import AnimateModal from "@/Components/AnimateModal";
import React, { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextField,
    LinearProgress,
} from "@mui/material";
const TrackOrder = ({ auth }) => {




      const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      );

const [orderStatus, setOrderStatus] = useState(0);
    return (
        <div>
            {/* Navigation */}
            <AnimateModal auth={auth}>
            <Box sx={{ minWidth: 275 }}>
      <Card style={{   margin: "0 auto",width: "30%", marginBottom: "3rem" }} variant="outlined">{card}</Card>
    </Box>
                <div
                    style={{
                        margin: "0 auto",
                        backgroundColor: "#17191B",
                        width: "50%",
                        paddingBottom: "10rem",
                    }}
                >
                    <ProgressBar percent={orderStatus}>
                        <Step>
                            {({ accomplished }) => (
                                <div>
                                    {" "}
                                    <div style={{

                                        backgroundColor: "#FC0035",

                                       borderColor: "#FC0035",



                                     }} className="indexedStep"></div>
                                </div>
                            )}
                        </Step>
                        <Step>
                            {({ accomplished }) => (
                                <div style={{
                                    backgroundColor: orderStatus >= 50 ? "#FC0035" : "",
                                    borderColor: orderStatus >= 50 ? "#FC0035" : "",
                                 }} className="indexedStep"></div>
                            )}
                        </Step>
                        <Step>
                        {({ accomplished }) => (
                                <div style={{
                                    backgroundColor: orderStatus >= 100 ? "#FC0035" : "",
                                    borderColor: orderStatus >= 100 ? "#FC0035" : "",
                                 }} className="indexedStep"></div>
                            )}
                        </Step>
                    </ProgressBar>
                    <p style={{
                          marginTop: "3rem",
                          marginBottom: "3rem",
                          color: "white",
                          textAlign: "center"
                     }}>
                        Your order has been Paid now waiting for shipping.....
                    </p>

                    <div
                        style={{
                            width: "70%",

                            borderLeft: "1px solid white",
                            margin: "0 auto",
                            borderRight: "1px solid white",
                        }}
                    >
                        <p
                            style={{
                                marginLeft: "1rem",
                                color: "white",
                                marginBottom: "10px",
                            }}
                        >
                            ds
                        </p>
                      <div className="ds"  style={{  borderBottom: "1px solid black",
        width: "80%",
        margin: "0 auto",
        marginBottom: "1rem",
        backgroundColor: "white",
        borderBottomColor: "white",
         }}></div>
                    </div>
                </div>
            </AnimateModal>
        </div>
    );
};

export default TrackOrder;
