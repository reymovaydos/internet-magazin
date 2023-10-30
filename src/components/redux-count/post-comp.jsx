import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getData } from "../store/slices/thunks/post-thunk";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
export const PostsThunkApi = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active)
    }
    const dispatch = useDispatch();
    const data = useSelector((state) => state.post.data);
    const loading = useSelector((state) => state.post.loading);
    const error = useSelector((state) => state.post.error);
    useEffect(() => {
        dispatch(getData())
    }, [dispatch])
    if (loading) {
        return <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    }
    if (error) {
        return <div>Error... {error}</div>
    }
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            {data && data.map((item) => (
                <div style={{ margin: '0 auto', marginTop: '20px' }} key={item}>
                    <Card sx={{ width: '100%', height: '100%', }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    C
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Countries"
                            subheader="September 17, 2023"
                        />
                        <img style={{ paddingLeft: '30px' }} width="80%" src={item.flags.png} alt="" />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <h2 style={{ paddingLeft: '30px' }}>{item.name.official}</h2>
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <Button
                                    onClick={handleClick}
                                    style={{ color: active ? "black" : "red" }}
                                >
                                    <FavoriteIcon />
                                </Button>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Countries:</Typography>
                                <Typography paragraph>
                                    {item.flags.alt}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
            ))}
        </div>
    )
}