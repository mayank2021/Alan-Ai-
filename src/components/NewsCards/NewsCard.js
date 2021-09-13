import React from 'react';

import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';

const infoCards = [
    { color: '#00adb5', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#ff96ad', title: 'News by Categories', info: 'Business, Entertainment, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#1eae98', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#fa9905', title: 'News by Sources', info: 'CNN, ABC News ,BBC News, CBC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ( { articles, ActiveArticle } ) => {
   const classes = useStyles();

   if(!articles.length){
    return(
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    infoCards.map((infoCard, i) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                          <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                             <Typography className={classes.infocard_title}  variant="h5">{infoCard.title}</Typography>
                             {
                                 infoCard.info? <Typography variant="h6"><strong>{infoCard.title.split(' ')[2]}:<br /> {infoCard.info}</strong></Typography>: null
                             }
                             <Typography variant="h6">Try saying: <br/><i>{infoCard.text}</i></Typography>
                          </div>
                        </Grid>
                    ))
                }
            </Grid>
        </Grow>
    );
   }

    return(
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {
                articles.map((article, i) => (
                   <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                      <NewsCard ActiveArticle={ActiveArticle} article={article} i={i} />
                   </Grid>
                ))
            }
            </Grid>
        </Grow>
    );
}

export default NewsCards;