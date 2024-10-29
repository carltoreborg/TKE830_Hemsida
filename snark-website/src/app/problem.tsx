"use client";

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const Problem: React.FC = () => {
    const [open, setOpen] = useState<number | null>(null);

    const handleClickOpen = (index: number) => {
        setOpen(index);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const images = [
        { src: "./images/Sleep-trouble.png", alt: "sleep-trouble", title: "Sleep Trouble", description: "There is a lot of different resons why people have trouble sleeping. We want to focus on 3 main areas: We want to be able to fall asleep fast, have it easy to wake up and be able to sleep the entire night." },
        { src: "./images/different-pref.png", alt: "different-pref", title: "Different Preferences", description: "For people living together, a problem isWhen people live together, they often have unique sleep needs based on personal preferences, work schedules, and individual sleep rhythms. For instance, one person might need total darkness, while another is comfortable with a nightlight. Temperature preferences can also vary, with some needing a cool room to sleep soundly, while others prefer warmth. These differences in sleep conditions, if not managed well, can lead to disrupted sleep and tension." },
        { src: "./images/weather.png", alt: "weather", title: "Weather", description: "Changing weatherconditions effect our sleep and we are using costly and energy expensive technology to warm up/cool down. The problem is that we try to find the right temperature for the entire room instead of just focusing on the bed." }
    ];
    
    return (
        <div className='flex flex-row items-center justify-center'>
            {images.map((image, index) => (
                <div key={index} onClick={() => handleClickOpen(index)} className="cursor-pointer">
                    <img src={image.src} alt={image.alt} className="h-128 w-128 hover:brightness-50" />
                </div>
            ))}

            {images.map((image, index) => (
                <Dialog key={index} open={open === index} onClose={handleClose} style={{width: 'auto', height: 'auto'}}>
                    <DialogTitle style={{ textAlign: 'left' }}>{image.title}</DialogTitle>
                    <DialogContent>
                    <div className='flex flex-row items-center justify-center'>
                    <div>
                    <img src={`${image.src.replace('.png', '-no-button.png')}`} alt={image.alt} style={{ width: '1080px', height: 'auto' }} />
                    </div>

                    <div className="h-200 w-200 ml-10">
                        <p className=''>
                            {image.description}
                        </p>
                    </div>
                    </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            ))}
        </div>
    );
};

export default Problem;