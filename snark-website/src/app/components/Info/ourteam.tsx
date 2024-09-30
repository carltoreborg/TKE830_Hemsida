"use client";

import React, { use, useState } from 'react';
import { Grid, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface TeamMember {
    name: string;
    image: string;
    contact: string;
}

const teamMembers: TeamMember[] = [
    { name: 'Casper Hansen', image: '/images/jawadre.png', contact: 'cool@mail.com' },
    { name: 'Jennifer Hallberg', image: 'path/to/bob.jpg', contact: ''  },
    { name: 'Alexander Gilabert', image: 'path/to/charlie.jpg', contact: ''  },
    { name: 'Hanna Forsling', image: 'path/to/david.jpg', contact: ''  },
    { name: 'Simon Westlin Green', image: '/images/casino.png', contact: ''  },
    { name: 'Carl Toreborg', image: "/images/watt.jpg", contact: ''  },
];

const OurTeam: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const handleClickOpen = (member: TeamMember) => {
        setSelectedMember(member);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedMember(null);
    };

    return (
        <>
            <Grid container spacing={4}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className='rounded-[12px] bg-[#EFE2CE] hover:bg-[#EFE2DE]' onClick={() => handleClickOpen(member)}> 
                            <CardContent className='flex flex-col items-center'>
                                <img src={member.image} alt={member.name} style={{ width: '120px', height: 'auto' }} className='mb-4' />
                                <Typography variant="h5" component="div" className='text-center'>
                                    {member.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{selectedMember?.name}</DialogTitle>
                <DialogContent>
                    <img src={selectedMember?.image} alt={selectedMember?.name} style={{ width: '100%', height: 'auto' }} />
                    <Typography variant="h5" component="h3"> {/* Updated to use Typography with variant h4 */}
                    Contact: {selectedMember?.contact}
                </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default OurTeam;