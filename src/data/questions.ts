export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Who led the Israelites out of Egypt?",
    options: ["Abraham", "Moses", "David", "Joshua"],
    correctAnswer: 1,
    explanation:
      "Moses was chosen by God to lead the Israelites out of Egypt (Exodus).",
  },
  {
    id: 2,
    text: "What is the first book of the Bible?",
    options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    correctAnswer: 0,
    explanation:
      "Genesis is the first book of the Bible and tells the story of creation.",
  },
  {
    id: 3,
    text: "Who was swallowed by a great fish?",
    options: ["Elijah", "Jonah", "Daniel", "Peter"],
    correctAnswer: 1,
    explanation:
      "Jonah was swallowed by a great fish after fleeing from God's command.",
  },
  {
    id: 4,
    text: "What was the name of Jesus’ mother?",
    options: ["Mary", "Elizabeth", "Martha", "Sarah"],
    correctAnswer: 0,
    explanation: "Mary was the mother of Jesus, chosen by God for this role.",
  },
  {
    id: 5,
    text: "Which disciple walked on water with Jesus?",
    options: ["John", "Peter", "James", "Andrew"],
    correctAnswer: 1,
    explanation:
      "Peter walked on water toward Jesus but started sinking when he doubted.",
  },

  // Thought-Provoking Questions
  {
    id: 6,
    text: "If you could ask God one question, what would it be?",
    options: [
      "Why is there suffering?",
      "What is my purpose?",
      "When will Jesus return?",
    ],
    correctAnswer: 1,
    explanation:
      "This is subjective but highlights personal reflections on faith.",
  },
  {
    id: 7,
    text: "Do you think faith and science can coexist?",
    options: ["Yes", "No", "Not sure"],
    correctAnswer: 0,
    explanation:
      "Many believe faith and science address different aspects of truth.",
  },
  {
    id: 8,
    text: "If you could witness one biblical event, what would it be?",
    options: ["Creation", "Resurrection of Jesus", "Parting of the Red Sea"],
    correctAnswer: 1,
    explanation: "The resurrection is the cornerstone of Christian faith.",
  },
  {
    id: 9,
    text: "Do you think God speaks to people today?",
    options: ["Yes", "No", "Depends"],
    correctAnswer: 0,
    explanation:
      "Many Christians believe God still communicates through prayer, Scripture, and the Holy Spirit.",
  },
  {
    id: 10,
    text: "What do you think heaven will be like?",
    options: ["A peaceful place", "A joyful celebration", "Indescribable"],
    correctAnswer: 2,
    explanation:
      "Scripture says no mind can comprehend the wonders of heaven (1 Corinthians 2:9).",
  },

  // Humorous Questions
  {
    id: 11,
    text: "What do you think Jesus’ favorite food would be?",
    options: ["Fish and bread", "Pizza", "Manna"],
    correctAnswer: 0,
    explanation: "Jesus often ate fish and bread with His disciples (John 21).",
  },
  {
    id: 12,
    text: "If Noah were alive today, what would he build his ark out of?",
    options: ["Wood", "Steel", "Plastic"],
    correctAnswer: 1,
    explanation:
      "Steel would be a practical modern material for building a massive structure.",
  },
  {
    id: 13,
    text: "Do you think angels take coffee breaks?",
    options: ["Yes", "No", "Only if God allows"],
    correctAnswer: 1,
    explanation: "Angels are spiritual beings and don’t require food or rest.",
  },
  {
    id: 14,
    text: "What’s the first thing you’d do if Jesus walked into your house?",
    options: ["Pray", "Offer Him food", "Ask questions"],
    correctAnswer: 0,
    explanation: "Praying shows reverence and respect for His presence.",
  },
  {
    id: 15,
    text: "If you had to rename the Bible, what would you call it?",
    options: ["God’s Love Letter", "The Ultimate Guide", "The Truth"],
    correctAnswer: 2,
    explanation:
      "The Bible is often described as the ultimate truth for Christians.",
  },

  // Controversial Questions
  {
    id: 16,
    text: "Should Christians celebrate Halloween?",
    options: ["Yes", "No", "Depends"],
    correctAnswer: 2,
    explanation:
      "Some Christians participate with discernment, while others avoid it entirely.",
  },
  {
    id: 17,
    text: "Do you think pastors should be wealthy?",
    options: ["Yes", "No", "Depends"],
    correctAnswer: 2,
    explanation:
      "It depends on how they manage their resources and whether they prioritize ministry.",
  },
  {
    id: 18,
    text: "Is it okay for Christians to drink alcohol?",
    options: ["Yes", "No", "In moderation"],
    correctAnswer: 2,
    explanation:
      "Scripture warns against drunkenness but doesn’t forbid alcohol outright.",
  },
  {
    id: 19,
    text: "Should women be pastors?",
    options: ["Yes", "No", "Depends"],
    correctAnswer: 2,
    explanation:
      "Different denominations have varying interpretations of Scripture on this topic.",
  },
  {
    id: 20,
    text: "Do you think Christianity is the only path to God?",
    options: ["Yes", "No", "Not sure"],
    correctAnswer: 0,
    explanation:
      "Jesus said, 'I am the way, the truth, and the life' (John 14:6).",
  },
  {
    id: 21,
    text: "Would you forgive someone who hurt you deeply if they never apologized?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation:
      "This reflects Jesus' teaching on forgiveness in Matthew 18:21-22.",
  },
  {
    id: 22,
    text: "Have you ever shared a Bible verse on social media to appear spiritual?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This challenges authenticity in our faith practices.",
  },
  {
    id: 23,
    text: "Do you believe the Old Testament laws still apply today?",
    options: ["Yes", "No"],
    correctAnswer: 1,
    explanation:
      "Jesus fulfilled the law, changing its application for believers (Matthew 5:17).",
  },
  {
    id: 24,
    text: "Would you let your child marry someone of a different faith?",
    options: ["Yes", "No"],
    correctAnswer: 1,
    explanation:
      "This reflects on the teaching about being unequally yoked in 2 Corinthians 6:14.",
  },
  {
    id: 25,
    text: "Have you ever skipped church for a completely unimportant reason?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation:
      "This examines commitment to corporate worship (Hebrews 10:25).",
  },
  {
    id: 26,
    text: "If a stranger asked about your faith, would you confidently share the gospel?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This tests readiness to share our hope (1 Peter 3:15).",
  },
  {
    id: 27,
    text: "Do you think God has a sense of humor?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "Humor is a gift, and we are created in God's image.",
  },
  {
    id: 28,
    text: "Would you trust God to provide if you gave away your last dollar?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This tests faith in God's provision (Matthew 6:25-34).",
  },
  {
    id: 29,
    text: "Do you believe animals go to heaven?",
    options: ["Yes", "No"],
    correctAnswer: 1,
    explanation: "The Bible is silent on this, leaving room for debate.",
  },
  {
    id: 30,
    text: "Have you ever chosen not to help someone because it was inconvenient?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation:
      "This reflects on the parable of the Good Samaritan (Luke 10:25-37).",
  },
  {
    id: 31,
    text: "Would you be okay if God called you to a life of poverty?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This tests surrender and trust in God's plan.",
  },
  {
    id: 32,
    text: "Have you ever doubted the Bible's accuracy?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation:
      "Many believers wrestle with this question during their faith journey.",
  },
  {
    id: 33,
    text: "If you won the lottery, would you tithe on your winnings?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This examines our view of stewardship and giving.",
  },
  {
    id: 34,
    text: "Do you believe angels are actively involved in your life?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation:
      "Angels are often described as ministering spirits (Hebrews 1:14).",
  },
  {
    id: 35,
    text: "Would you accept a church leadership position if you felt unqualified?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation:
      "God often calls the unqualified and equips them (Exodus 4:10-12).",
  },
  {
    id: 36,
    text: "Do you believe your actions alone can earn salvation?",
    options: ["Yes", "No"],
    correctAnswer: 1,
    explanation:
      "Salvation is by grace through faith, not by works (Ephesians 2:8-9).",
  },
  {
    id: 37,
    text: "Have you ever eaten so much at a church potluck that you regretted it?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This humorous question touches on self-control.",
  },
  {
    id: 38,
    text: "Would you attend a church where the worship music isn't your style?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "True worship transcends personal preferences (John 4:24).",
  },
  {
    id: 39,
    text: "Do you believe baptism is necessary for salvation?",
    options: ["Yes", "No"],
    correctAnswer: 1,
    explanation:
      "Baptism is an important symbol but not a prerequisite for salvation.",
  },
  {
    id: 40,
    text: "Have you ever felt judged in church for how you dressed?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This explores the challenge of grace versus legalism.",
  },
  {
    id: 41,
    text: "Do you believe God cares about your day-to-day decisions?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "God is intimately involved in our lives (Proverbs 3:5-6).",
  },
  {
    id: 42,
    text: "Have you ever laughed out loud during a sermon?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This reflects the lighter side of church experiences.",
  },
  {
    id: 43,
    text: "Would you spend a year in solitude if God called you to it?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This tests willingness to follow God's unique plans.",
  },
  {
    id: 44,
    text: "Have you ever prayed for something trivial, like finding lost keys?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "God cares about the little things too.",
  },
  {
    id: 45,
    text: "Do you believe the devil is actively working in the world today?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "The Bible describes Satan as a deceiver (1 Peter 5:8).",
  },
  {
    id: 46,
    text: "Have you ever shared your testimony with a stranger?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This tests our boldness in sharing faith (Matthew 28:19-20).",
  },
  {
    id: 47,
    text: "Do you think it's okay to skip fasting if you're really hungry?",
    options: ["Yes", "No"],
    correctAnswer: 1,
    explanation: "Fasting is about the heart, not rules.",
  },
  {
    id: 48,
    text: "Have you ever fallen asleep while praying?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation:
      "This humorous question highlights human weakness in spiritual practices.",
  },
  {
    id: 49,
    text: "Do you believe heaven will have different rewards for believers?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "Scripture mentions varying rewards (1 Corinthians 3:14).",
  },
  {
    id: 50,
    text: "Would you sing in the church choir if you had a terrible voice?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "Worship is about the heart, not talent (Psalm 100:1-2).",
  },
  {
    id: 51,
    text: "Do you believe Jesus laughed during His time on Earth?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "As fully human, Jesus likely experienced joy.",
  },
  {
    id: 52,
    text: "Have you ever wished you lived during biblical times?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation:
      "This reflects on the unique challenges and wonders of those times.",
  },
  {
    id: 53,
    text: "Would you forgive someone who betrayed you like Judas did Jesus?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This tests our ability to follow Jesus' example.",
  },
  {
    id: 54,
    text: "Have you ever questioned why bad things happen to good people?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This is a common question about God's justice (Job 1:1-22).",
  },
  {
    id: 55,
    text: "Do you believe in the power of prayer to heal illnesses?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "The Bible emphasizes prayer's power (James 5:16).",
  },
  {
    id: 56,
    text: "Have you ever tried to bribe God with a promise for an answered prayer?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This humorous question reflects on bargaining in prayer.",
  },
  {
    id: 57,
    text: "Would you sacrifice personal comfort to serve in a dangerous mission field?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This tests commitment to the Great Commission.",
  },
  {
    id: 58,
    text: "Have you ever forgotten a Bible verse in front of others?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This reflects the pressure of public faith.",
  },
  {
    id: 59,
    text: "Do you believe God has a specific plan for your life?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This reflects belief in God's sovereignty (Jeremiah 29:11).",
  },
  {
    id: 60,
    text: "Have you ever laughed at a biblical story because it sounded unbelievable?",
    options: ["Yes", "No"],
    correctAnswer: 0,
    explanation: "This humorous question highlights faith in the supernatural.",
  },
];
