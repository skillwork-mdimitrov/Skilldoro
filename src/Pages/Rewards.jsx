import Header from "../Components/Header"
import SingleReward from "../Components/SingleReward";
import PlaystationImage from '../images/ps5.jpg';
import SpotifyImage from '../images/spotify.png';
import JuicyCarImg from '../images/juicy-car.jpeg';
import MacbookImg from '../images/macbook.jpg';
import IphoneImg from '../images/iphone.jpg';
import MoneyImg from '../images/money.jpg';
import AppleMusicImg from '../images/apple-music.jpg';
import BeerImg from '../images/beers.jpg';

const Rewards = ({pointsForTheDay}) => {
    const clickHandler = () => {
        alert('Are you sure you want to take this reward?');
    }
    return (
        <>
            <Header pointsForTheDay={pointsForTheDay}/>

            <div className="rewards d-flex justify-content-around flex-wrap">
                <SingleReward
                    rewardImage={PlaystationImage}
                    rewardName="Playstation 5"
                    rewardPoints="2000"
                    rewardDescription="The base model includes an optical disc drive compatible with Ultra HD Blu-ray discs."
                    onClick={clickHandler}
                />

                <SingleReward
                    rewardImage={SpotifyImage}
                    rewardName="Spotify subscription"
                    rewardPoints="500"
                    rewardDescription="Nearly everybody has a preferred work playlist.
                    So you’re grooving along, in the zone, and then—screech—a horribly jarring ad comes on and ruins your focus."
                    onClick={clickHandler}
                />

                <SingleReward
                    rewardImage={JuicyCarImg}
                    rewardName="Juicy car"
                    rewardPoints="2500"
                    rewardDescription="Pick up your Juicy car from  and get amazing service before you hit the road for an around town trip."
                    onClick={clickHandler}
                />

                <SingleReward
                    rewardImage={MacbookImg}
                    rewardName="MacBook"
                    rewardPoints="3000"
                    rewardDescription="To be added description"
                    onClick={clickHandler}
                />

                <SingleReward
                    rewardImage={IphoneImg}
                    rewardName="Iphone 13"
                    rewardPoints="1500"
                    rewardDescription="Apple's newest iPhones with updated cameras, new colors, smaller notches, and faster A15 chip."
                    onClick={clickHandler}
                />

                <SingleReward
                    rewardImage={MoneyImg}
                    rewardName="1000 leva"
                    rewardPoints="1000"
                    rewardDescription="To be added description"
                    onClick={clickHandler}
                />
                <SingleReward
                    rewardImage={AppleMusicImg}
                    rewardName="Apple Music"
                    rewardPoints="500"
                    rewardDescription="Apple Music is a subscription-based music streaming service, like Spotify, offering access to over 90 million songs."
                    onClick={clickHandler}
                />
                <SingleReward
                    rewardImage={BeerImg}
                    rewardName="20 Beers"
                    rewardPoints="750"
                    rewardDescription="You can take 20 beers."
                    onClick={clickHandler}
                />
                <SingleReward
                    rewardName="Will be added soon"
                    rewardPoints="0"
                    rewardDescription="Soon"
                    onClick={clickHandler}
                />
                <SingleReward
                    rewardName="Will be added soon"
                    rewardPoints="0"
                    rewardDescription="Soon"
                    onClick={clickHandler}
                />
            </div>
        </>
    )
}

export default Rewards;
