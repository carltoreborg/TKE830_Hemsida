import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface TeamMember {
    name: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    { name: 'Casper Hansen', image: '/images/jawadre.png' },
    { name: 'Jennifer Hallberg', image: 'path/to/bob.jpg' },
    { name: 'Alexander Gilabert', image: 'path/to/charlie.jpg' },
    { name: 'Hanna Forsling', image: 'path/to/david.jpg' },
    { name: 'Simon Westlin Green', image: '/images/casino.png' },
    { name: 'Carl Toreborg', image: "/images/watt.jpg" },
];

const OurTeam: React.FC = () => {
    return (
        <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className='rounded-[12px] bg-[#EFE2CE] hover:bg-[#EFE2DE]'> 
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
    );
};

export default OurTeam;