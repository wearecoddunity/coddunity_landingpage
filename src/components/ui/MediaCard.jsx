import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

export default function MediaCards() {

    return (
        <>
        <Card className="transform transition-transform duration-300 hover:scale-105" sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="card image"
                height="50"
                image="/assets/code.webp" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Co-Creation Environment
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Making gathering with your teammates easy
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

        <Card className="transform transition-transform duration-300 hover:scale-105" sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="card image"
                height="50"
                image="/assets/team-mates.jpeg"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Find your teammates
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Find your potential teammates from your own college at one click
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Explore</Button>
            </CardActions>
        </Card>

        <Card className="transform transition-transform duration-300 hover:scale-105" sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="card image"
                height="50"
                image="/assets/invest.jpeg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Investors Approach
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Helping invention to go funded from bootstraped
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Request Free Demo</Button>
            </CardActions>
        </Card>

        </>
    )
}