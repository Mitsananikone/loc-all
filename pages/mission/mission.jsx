import React, { useState, useEffect, useRef } from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import styles from "./mission.module.css"; // Import the CSS Module

function Mission() {
  const [selectedVerses, setSelectedVerses] = useState(null);
  const popupRef = useRef(null);
  const missionData = [
    {
      number: "01",
      title: "Vulnerability: Acknowledging Brokenness",
      points: [
        "LOC acknowledges openly our brokenness because of our sin (Romans 3:10-12 & 7:15-25) and recognizes our need for help.",
        "By being real people with real hurts, we create an environment where authenticity leads to healing through Christ, deepening our faith at the roots.",
        "We hope to do this with an emphasis on mental and emotional health, and helping folks find Christ, the resources they need, and a community of spiritual family to better cope.",
      ],
      backgroundImage: "/images/background1.jpg", // Replace with your image path
    },
    {
      number: "02",
      title: "Engagement: Impacting Our Community & Beyond",
      points: [
        "LOC engages with our community to create positive change, fostering relationships and transcending political and cultural divisions through our focus on Jesus' greatness (Mark 12:14-17 & Ephesians 2:13-22).",
        "Our commitment to making a tangible impact in our community helps us address real hurts and build deeper connections, embodying Christ's teachings.",
        "We plan to do this by partnering with local agencies that are already working to build a better Alvin for everybody and giving them the added impact our church can bring.",
      ],
      backgroundImage: "/images/background2.jpg", // Replace with your image path
    },
    {
      number: "03",
      title: "Pursuit: Bringing People Closer to Christ",
      points: [
        "LOC actively pursues those far from Christ, seeking to bring them closer to Him through acts of love, generosity, justice, and compassion (Isaiah 61:4 & James 2:14-18).",
        "By prioritizing our neighbors' needs and demonstrating Christ's love, we help others begin their healing journey and grow deeper in their faith.",
        "We do this through making disciples intentionally in Connect Groups, worshipping and praying together as a church, along with community and personal outreach.",
      ],
      backgroundImage: "/images/background3.jpg", // Replace with your image path
    },
  ];

  // Bible verses data with full quotes
  const bibleVerses = {
    "Romans 3:10-12":
      "As it is written: 'There is no one righteous, not even one; there is no one who understands; there is no one who seeks God. All have turned away, they have together become worthless; there is no one who does good, not even one.'",
    "Romans 7:15-25":
      "I do not understand what I do. For what I want to do I do not do, but what I hate I do. For I do not do the good I want to do, but the evil I do not want to do—this I keep on doing. Now if I do what I do not want to do, it is no longer I who do it, but it is sin living in me that does it. So I find this law at work: Although I want to do good, evil is right there with me. For in my inner being I delight in God’s law; but I see another law at work in me, waging war against the law of my mind and making me a prisoner of the law of sin at work within me. What a wretched man I am! Who will rescue me from this body that is subject to death? Thanks be to God, who delivers me through Jesus Christ our Lord! So then, I myself in my mind am a slave to God’s law, but in my sinful nature a slave to the law of sin.",
    "Mark 12:14-17":
      "They came to him and said, 'Teacher, we know that you are a man of integrity. You aren’t swayed by others, because you pay no attention to who they are; but you teach the way of God in accordance with the truth. Is it right to pay the imperial tax to Caesar or not? Should we pay or shouldn’t we?' But Jesus knew their hypocrisy. 'Why are you trying to trap me?' he asked. 'Bring me a denarius and let me look at it.' They brought the coin, and he asked them, 'Whose image is this? And whose inscription?' 'Caesar’s,' they replied. Then Jesus said to them, 'Give back to Caesar what is Caesar’s and to God what is God’s.' And they were amazed at him.",
    "Ephesians 2:13-22":
      "But now in Christ Jesus you who once were far away have been brought near by the blood of Christ. For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility, by setting aside in his flesh the law with its commands and regulations. His purpose was to create in himself one new humanity out of the two, thus making peace, and in one body to reconcile both of them to God through the cross, by which he put to death their hostility. He came and preached peace to you who were far away and peace to those who were near. For through him we both have access to the Father by one Spirit. Consequently, you are no longer foreigners and strangers, but fellow citizens with God’s people and also members of his household, built on the foundation of the apostles and prophets, with Christ Jesus himself as the chief cornerstone. In him the whole building is joined together and rises to become a holy temple in the Lord. And in him you too are being built together to become a dwelling in which God lives by his Spirit.",
    "Isaiah 61:4":
      "They will rebuild the ancient ruins and restore the places long devastated; they will renew the ruined cities that have been devastated for generations.",
    "James 2:14-18":
      "What good is it, my brothers and sisters, if someone claims to have faith but has no deeds? Can such faith save them? Suppose a brother or a sister is without clothes and daily food. If one of you says to them, 'Go in peace; keep warm and well fed,' but does nothing about their physical needs, what good is it? In the same way, faith by itself, if it is not accompanied by action, is dead. But someone will say, 'You have faith; I have deeds.' Show me your faith without deeds, and I will show you my faith by my deeds.",
  };

  // Function to extract Bible verse references from a string
  
  const extractVerseReferences = (text) => {
    const regex = /\(([^)]+)\)/g;
    const matches = text.match(regex);
    return matches ? matches.map((match) => match.slice(1, -1)) : [];
  };

  const getAllVerses = (verse) => {
    // Split the verse into parts using " & "
    const parts = verse.split(" & ");
    // Extract the book name from the first part (e.g., "Romans 3:10-12" -> "Romans")
    const bookName = parts[0].split(" ")[0];
    // Add the book name to any subsequent parts that lack it
    return parts.map((part) => (part.includes(" ") ? part : `${bookName} ${part}`));
  };

  const renderPointWithVerses = (point) => {
    const verseReferences = extractVerseReferences(point);
    let parts = point.split(/\(([^)]+)\)/g);

    return parts.map((part, index) => {
      if (verseReferences.includes(part)) {
        return (
          <span
            key={index}
            className={styles.verseLink}
            onClick={() => setSelectedVerses(getAllVerses(part))}
          >
            ({part})
          </span>
        );
      }
      return part;
    });
  };

  // Handle clicks outside the popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSelectedVerses(null);
      }
    };

    // Add event listener when the popup is open
    if (selectedVerses) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedVerses]);

  return (
    <div className={styles.centerContainer}>
      {/* Header */}
      <h2 className={styles.header}>
        <i className="fa-solid fa-hand-holding-heart" aria-hidden="true"></i> Our Mission
      </h2>

      {/* Mission Cards */}
      {missionData.map((mission, index) => (
        <div key={index} className={styles.card}>
          {/* Faded Background Image */}
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${mission.backgroundImage})` }}
          ></div>

          {/* Top Half */}
          <div className={styles.topHalf}>
            <div className={styles.parallelogramContainer}>
              <Parallelogram
                width="80px"
                height="80px"
                color="var(--primary-color)"
                top="0vh"
                left="0vw"
              >
                <div className={styles.missionNumberContainer}>
                  <h2 className={styles.missionNumber}>{mission.number}</h2>
                </div>
              </Parallelogram>
            </div>
            <h2 className={styles.missionTitle}>{mission.title}</h2>
          </div>

          {/* Bottom Half */}
          <div className={styles.bottomHalf}>
            <ul className={styles.missionPoints}>
              {mission.points.map((point, i) => (
                <li key={i} className={styles.point}>
                  {renderPointWithVerses(point)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Why Alvin Section */}
      <h2 className={styles.header}>
        <i className="fa-solid fa-location-dot" aria-hidden="true"></i> Why Alvin?
      </h2>
      <div className={styles.whyAlvinContainer}>
        <img
          src="/images/alvinNeighborhood.png"
          alt="Alvin Neighborhood"
          className={styles.alvinImage}
        />
        <p className={styles.whyAlvinText}>
          Simply put, the Northern Brazoria County Area is one of the fastest
          growing areas connected to Houston. The Alvin ISD is the 7th fastest
          growing school district in Texas, with a projection to grow by 7000
          students in the next 10 years.
          <br /> <br />
          Alvin is next on TxDOT's plan to expand highway 99, projecting 4000
          new home builds during that time. The fact is, Alvin is going to
          need more Gospel-centered churches.
        </p>
      </div>

      {/* Popup for Bible Verses */}
      {selectedVerses && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup} ref={popupRef}>
            {selectedVerses.map((verse, index) => (
              <div key={index}>
                <h2>{verse}</h2>
                <p>{bibleVerses[verse]}</p>
                <br />
              </div>
            ))}
            <button
              className={styles.closeButton}
              onClick={() => setSelectedVerses(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mission;