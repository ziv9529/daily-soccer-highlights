import React, { useEffect, useMemo, useState } from 'react'
import { fetchHighlightsService } from '../../Services/highlightsService'
import { HighlightModel } from "../../Models/highlightModel"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SportsIcon from '@mui/icons-material/Sports';
import './styles.css';
import { getUniqueTeamsArray } from '../../Utils/uniqueTeamsArray';
import { Typography } from '@mui/material';

const Highlights = () => {

    const [highlights, setHighlights] = useState<HighlightModel[]>([])
    const [inputTeam, setInputTeam] = useState<string>('')
    const [selectedTeam, setSelectedTeam] = useState<string>('')
    const [currentVideo, setCurrentVideo] = useState(0);

    const memoizedHighlights = useMemo(() => {
        if (!selectedTeam) {
            return highlights;
        }
        return highlights.filter((highlight: HighlightModel) => {
            return (highlight.side1.name.toLowerCase().includes(selectedTeam) || highlight.side2.name.toLowerCase().includes(selectedTeam))
        });
    }, [highlights, selectedTeam]);

    useEffect(() => {
        const fetchData = async () => {
            const highlights_data = await fetchHighlightsService();
            setHighlights(highlights_data);
        };
        fetchData();
    }, []);

    const handlePrev = () => {
        setCurrentVideo(currentVideo - 1);
    };

    const handleNext = () => {
        setCurrentVideo(currentVideo + 1);
    };

    const handleInputChange = (event: any, value: string) => {
        if (value === '') setSelectedTeam('')
        setInputTeam(value.toLowerCase())
    };

    const handleSelectTeam = () => {
        setCurrentVideo(0);
        setSelectedTeam(inputTeam);
    };

    return (
        <> {
            memoizedHighlights.length > 0 && <>
                <Typography className='header-section' variant="subtitle1" gutterBottom>
                    You can enjoy all the recent soccer higlights all over the world. <br />
                    If you want you can search your favorite team to see recent games .
                </Typography>
                <div className='input-section'>
                    <Autocomplete
                        onInputChange={handleInputChange}
                        disablePortal
                        id="combo-box-demo"
                        options={getUniqueTeamsArray(memoizedHighlights)}
                        sx={{ width: 300 }}
                        renderInput={
                            (params) => <TextField {...params} label="Team Name" />
                        }
                    />
                    <div>
                        <IconButton disabled={!(getUniqueTeamsArray(memoizedHighlights).some(team => team.toLowerCase() === inputTeam.toLowerCase()))} onClick={handleSelectTeam}>
                            <SportsIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>
                <div className='arrows-responsive'>
                    <div className='left-arrow-responsive'>
                        <IconButton disabled={currentVideo === 0} onClick={handlePrev}>
                            <ArrowBackIosIcon fontSize='large' />
                        </IconButton>
                    </div>
                    <div className='right-arrow-responsive'>
                        <IconButton disabled={currentVideo === memoizedHighlights.length - 1} onClick={handleNext}>
                            <ArrowForwardIosIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>
                <div className='highlight-section' >
                    <div className='left-arrow'>
                        <IconButton disabled={currentVideo === 0} onClick={handlePrev}>
                            <ArrowBackIosIcon fontSize='large' />
                        </IconButton>
                    </div>

                    <div>
                        <div className='details-section'>
                            <div>
                                {memoizedHighlights[currentVideo]?.competition.name}
                            </div>
                            <div>
                                {memoizedHighlights[currentVideo]?.side1?.name} - {memoizedHighlights[currentVideo]?.side2?.name}
                            </div>
                            <div>
                                {
                                    new Date(memoizedHighlights[currentVideo]?.date).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric'
                                    })
                                }
                            </div>
                        </div>
                        <div
                            className='highlight'
                            dangerouslySetInnerHTML={{
                                __html: memoizedHighlights[currentVideo]?.embed
                            }}
                        />
                    </div>
                    <div className='right-arrow'>
                        <IconButton disabled={currentVideo === memoizedHighlights.length - 1} onClick={handleNext}>
                            <ArrowForwardIosIcon fontSize='large' />
                        </IconButton>
                    </div>

                </div>
            </>
        }

        </>
    )
}

export default Highlights