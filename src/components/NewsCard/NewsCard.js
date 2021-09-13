import React,{ useState, useEffect, createRef} from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './style.js';
import classNames from 'classnames';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage}, i, ActiveArticle}) => {
    const [eleRefs, setEleRefs] = useState([]);
    const classes = useStyles();
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
      setEleRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    },[]);

    useEffect(() => {
       if(i === ActiveArticle && eleRefs[ActiveArticle]){
           scrollToRef(eleRefs[ActiveArticle]);
       }
    },[i, ActiveArticle, eleRefs]); 
    
    return (
        <Card ref={eleRefs[i]} className={classNames(classes.card, ActiveArticle === i? classes.activeCard: null)}>
            <CardActionArea href={url} target="_blank" >
                <CardMedia className={classes.media} image = {urlToImage || 'https://www.ipd-az.org/wp-content/uploads/2019/12/News.jpg'}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{ (new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{ source.name}</Typography> 
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p"> {description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" >Learn More</Button>
                <Typography variant="h5" color="textSecondary" >{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;