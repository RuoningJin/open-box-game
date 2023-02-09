import './Consent.scss';
import { useNavigate } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export default function Consent () {
  const navigate = useNavigate();
  const handleConsentClick = () => navigate('/main');

  return (
    <>
      <section className='consent-background' />

      <main className='consent'>
        
        <section className='consent-container'>

          <div className={'consent-title'}>
            <span className="red">C</span>
            <span className="blue">o</span>
            <span className="yellow">n</span>
            <span className="green">s</span>
            <span className="yellow">e</span>
            <span className="blue">n</span>
            <span className="red">t</span>
          </div>

          <Box display='block' overflowY='scroll' className='consent-content'>
            <p>
              We are interested to know how people make decisions. We invite you to play a game for about 7 minutes. Adults and children at or above age of 3 can all play. <br/>When you play the game, we will record what choices you make and how long it takes you to decide. We will not ask you for any personal information except for your age and gender. The anonymous information we obtain when you play the game will be used for research purpose and may be shared with other researchers. You can still play the game even if you do not want to tell us your age and gender. You will not pay any money or get paid for playing the game. You can quit the game any time if you do not want to continue. By playing the game or authorizing your child to play the game, you consent to participate in this research. If you are under the age of 16 without your parent's agreement, you can still play the game but will not participate in the research.This research is conducted by The International Research Center for Neurointelligence, and regulated by the Office for Life Science Research Ethics and Safety, The University of Tokyo. If you have any questions about the study, you can contact the Principal Investigator Mingbo Cai at mingbo.cai@mail .u-tokyo.ac.jp.If you are at least 16 years old and agree to play the game, you can click the Start (age&gt;=16) button. If you are the parent or legal guardian of your child under the age of 16 and agree for your child to play, you can press the Authorize my child (3≤ age &lt;16) button to continue. If you are below the age of 16 and your parents are not here today but you still wish to play, you can click Skip consent (3≤ age&lt;16) button to play the game without participating in the research. If you do not want to play or participate in the research, you can visit other parts of the exhibition.
            </p>
          </Box>

          <div className='consent-confirm'>
            <Button size='lg' colorScheme='whatsapp' variant='solid' className='consent-confirm--button' onClick={handleConsentClick}>
              I Agree
            </Button>
            <Button size='lg' width='300px' colorScheme='red' variant='outline' className='consent-confirm--button' onClick={handleConsentClick}>
              Skip
            </Button>
          </div>

        </section>
      </main>
    </>
  );
};