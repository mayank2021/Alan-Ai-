import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import NewsCrads from './components/NewsCards/NewsCard';

const alanKey = '13bdc862e0b0f42e0ed0a62187218cb22e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
   
  const [NewsArticle, setNewsArticles] = useState([]);
  const [ActiveArticle, SetActiveArticle] = useState(-1);

   useEffect( () => {
         alanBtn({
           key: alanKey,
           onCommand: ({ command, articles, number}) => {
                if(command === 'newHeadlines'){
                  setNewsArticles(articles);
                  SetActiveArticle(-1);
                }else if (command === 'highlight'){
                  SetActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
                }else if(command === 'open'){
                  const parseNumber = number.length > 2? wordsToNumbers(number, {fuzzy: true}): number;
                  const article = articles[parseNumber - 1];

                  if(parseNumber > 20 ){
                    alanBtn().playText('Please try that again.')
                  }else if(article){
                     window.open(article.url, '_blank');
                     alanBtn().playText('Opening...');
                  }
                }
           }
         })
   }, [])
  return (
    <div style={{textAlign:'center'}}>
      <img className="app_image" src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" alt="alan"></img>
       <NewsCrads articles={NewsArticle} ActiveArticle={ActiveArticle} />
       <p className="credits">Made with ❤ by Mayank.</p>
    </div>
  );
}
export default App;
