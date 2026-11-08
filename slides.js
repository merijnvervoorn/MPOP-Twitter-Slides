const slidesData = [
    {
        id: 1,
        author: "Sophia Chen",
        handle: "@schen_pol",
        avatarBg: "bg-blue-600",
        avatarLetter: "SC",
        time: "10m ago",
        headline: "Exposure to Opposing Views on Social Media Can Increase Political Polarization",
        tweetText: "Bail et al. (2018), PNAS. Investigating whether echo chambers on social media exacerbate political polarization when disrupted.",
        stats: { replies: 14, retweets: 89, likes: 342 },
        detailed: `
            <div class="text-white text-lg space-y-5 leading-relaxed">
                <p><strong>Citation:</strong> Bail, Christopher A., et al. 2018. “Exposure to Opposing Views on Social Media Can Increase Political Polarization.” <em>Proceedings of the National Academy of Sciences</em> 115(37): 9216–9221.</p>
                <p><strong>Core Motivation:</strong> Mounting concern that social media sites foster echo chambers by insulating users from opposing political perspectives.</p>
                <p><strong>Research Gap:</strong> While echo chambers are frequently blamed for partisan divides, it is notoriously difficult to establish whether social media networks shape political opinions or vice versa. This study uses a large-scale field experiment to establish causality.</p>
            </div>
        `,
        comments: [
            { author: "Jordan Reed", handle: "@jreed_soc", avatarBg: "bg-indigo-600", initials: "JR", text: "Great introductory setup. Establishing causality in digital media networks has always been the holy grail of political communication research." },
            { author: "Dr. Aris Thorne", handle: "@athorne_soc", avatarBg: "bg-amber-600", initials: "AT", text: "Observational studies always suffered from endogeneity issues before this field experiment." }
        ],
        devilsAdvocate: "Is it even fair to call standard timeline sorting an 'echo chamber' if users actively choose who to follow based on homophily?"
    },
    {
        id: 2,
        author: "Prof. Sarah Jenkins",
        handle: "@sjenkins_pol",
        avatarBg: "bg-purple-600",
        avatarLetter: "SJ",
        time: "8m ago",
        headline: "The Echo Chamber & Partisan Sorting",
        tweetText: "Partisan polarization in the US is at historic highs. Partisan identity predicts policy preferences nearly 3x better than education or age.",
        stats: { replies: 8, retweets: 45, likes: 210 },
        detailed: `
            <div class="text-white text-lg space-y-5 leading-relaxed">
                <p><strong>Deep Divides:</strong> Americans are deeply divided on controversial issues such as immigration, gun control, and economic inequality, with partisan identification becoming tightly aligned with personal identity.</p>
                <p><strong>The Echo Chamber Mechanism:</strong> Often attributed to social network homophily—the well-documented tendency for people to connect with others who share similar beliefs.</p>
                <p><strong>The Classical Assumption:</strong> Conventional wisdom assumed that exposing people to cross-cutting viewpoints would naturally foster moderation and mutual understanding.</p>
            </div>
        `,
        comments: [
            { author: "Chloe Bennett", handle: "@chloe_data", avatarBg: "bg-pink-600", initials: "CB", text: "The alignment between partisan identity and social policy preferences is striking here." },
            { author: "Liam O'Connor", handle: "@liam_comp", avatarBg: "bg-emerald-600", initials: "LO", text: "Homophily makes organic cross-cutting exposure extremely rare on social networks." }
        ],
        devilsAdvocate: "Does political polarization stem from media echo chambers, or are citizens simply sorting themselves into ideological camps offline first?"
    },
    {
        id: 3,
        author: "Liam O'Connor",
        handle: "@liam_computational",
        avatarBg: "bg-emerald-600",
        avatarLetter: "LO",
        time: "7m ago",
        headline: "Three Preregistered Hypotheses",
        tweetText: "The authors set up 3 competing hypotheses before running the experiment: Intergroup Contact Theory vs. Backfire Effects vs. Conservative Asymmetry.",
        stats: { replies: 19, retweets: 67, likes: 189 },
        detailed: `
            <div class="text-white text-lg space-y-5 leading-relaxed">
                <ul class="list-disc pl-6 space-y-4">
                    <li><strong>H1 (Intergroup Contact Theory):</strong> Disrupting selective exposure reduces polarization by challenging stereotypes and encouraging political compromise.</li>
                    <li><strong>H2 (Backfire Effect):</strong> Exposure to conflicting messages triggers motivated reasoning and counterarguing, reinforcing preexisting beliefs.</li>
                    <li><strong>H3 (Asymmetric Polarization):</strong> Backfire effects are more likely among conservatives than liberals due to differing core values regarding tradition and certainty.</li>
                </ul>
            </div>
        `,
        comments: [
            { author: "Sophia Chen", handle: "@schen_pol", avatarBg: "bg-blue-600", initials: "SC", text: "H3 is particularly bold since it connects psychological traits directly to partisan behavior on social media." },
            { author: "Elena Rostova", handle: "@elena_policy", avatarBg: "bg-rose-600", initials: "ER", text: "Motivated reasoning is notoriously powerful in political psychology." }
        ],
        devilsAdvocate: "Why do you think the authors expected conservatives to be more vulnerable to backfire effects than liberals?"
    },
    {
        id: 4,
        author: "Chloe Bennett",
        handle: "@chloe_data",
        avatarBg: "bg-pink-600",
        avatarLetter: "CB",
        time: "5m ago",
        headline: "Methodology: Automated Bots & Field Experiment",
        tweetText: "Methodology flex: 1,652 Twitter users surveyed. Offered $11 to follow Twitter bots for 1 month retweeting 24 opposing political messages daily.",
        stats: { replies: 25, retweets: 112, likes: 512 },
        detailed: `
            <div class="text-white text-lg space-y-5 leading-relaxed">
                <p><strong>Sample Recruitment:</strong> Recruited 901 Democrats and 751 Republicans who visit Twitter at least three times each week.</p>
                <p><strong>Bot Treatment:</strong> Treated respondents were paid $11 to follow a Twitter bot that retweeted 24 opposing messages daily for 1 month (Democrats followed a conservative bot; Republicans followed a liberal bot).</p>
                <p><strong>Compliance Tracking:</strong> Offered additional financial incentives (up to $18) for completing weekly surveys testing tweet content and identifying daily deleted animal pictures.</p>
            </div>
        `,
        comments: [
            { author: "Dr. Marcus Vance", handle: "@mvance_stats", avatarBg: "bg-amber-600", initials: "MV", text: "The animal picture compliance check is a brilliantly clever way to verify attention span." },
            { author: "Jordan Reed", handle: "@jreed_soc", avatarBg: "bg-indigo-600", initials: "JR", text: "Paying participants $11 introduces an interesting incentive structure compared to natural browsing." }
        ],
        devilsAdvocate: "Does paying participants financial incentives to follow political bots invalidate the real-world external validity of the experiment?"
    },
    {
        id: 5,
        author: "Dr. Marcus Vance",
        handle: "@mvance_stats",
        avatarBg: "bg-amber-600",
        avatarLetter: "MV",
        time: "4m ago",
        headline: "Empirical Results: Conservative Backfire",
        tweetText: "The big findings: Republicans exposed to liberal bots became substantially more conservative (+0.60 on 7-pt scale). Democrats showed no significant change.",
        stats: { replies: 42, retweets: 230, likes: 890 },
        detailed: `
            <div class="text-white text-lg space-y-5 leading-relaxed">
                <ul class="list-disc pl-6 space-y-4">
                    <li><strong>Republicans (Significant Backfire):</strong> Treated Republicans exhibited substantially more conservative views post-treatment. Fully compliant respondents increased by +0.60 points on a 7-point scale.</li>
                    <li><strong>Democrats (Insignificant Shift):</strong> Treated Democrats exhibited slight liberal shifts post-treatment, but these effects were not statistically significant.</li>
                    <li><strong>Core Takeaway:</strong> Cross-cutting exposure on social media can backfire and exacerbate polarization rather than bridging partisan divides.</li>
                </ul>
            </div>
        `,
        comments: [
            { author: "Prof. Sarah Jenkins", handle: "@sjenkins_pol", avatarBg: "bg-purple-600", initials: "SJ", text: "The asymmetry in the results between Republicans and Democrats is the most shocking takeaway." },
            { author: "Liam O'Connor", handle: "@liam_comp", avatarBg: "bg-emerald-600", initials: "LO", text: "+0.60 on a 7-point scale is a massive movement for a one-month intervention." }
        ],
        devilsAdvocate: "Why did treated Democrats experience virtually no statistically significant shift while Republicans moved so sharply to the right?"
    },
    {
        id: 6,
        author: "Elena Rostova",
        handle: "@elena_policy",
        avatarBg: "bg-rose-600",
        avatarLetter: "ER",
        time: "3m ago",
        headline: "Critical Evaluation & Study Limitations",
        tweetText: "Critical evaluation: 1) Bots retweeted political elites who are far more polarized than average voters. 2) Financial incentives alter natural user behavior.",
        stats: { replies: 11, retweets: 38, likes: 175 },
        detailed: `
            <div class="text-white text-lg space-y-5 leading-relaxed">
                <ul class="list-disc pl-6 space-y-4">
                    <li><strong>Elite Polarization Bias:</strong> Bots retweeted high-profile political elites and opinion leaders who are significantly more polarized than the general electorate.</li>
                    <li><strong>External Validity:</strong> Offering financial incentives to read opposing views differs from organic social media use where users easily mute or ignore disagreeable content.</li>
                    <li><strong>Unresolved Mechanisms:</strong> The study cannot definitively isolate whether backfire resulted from issue disagreement or anti-elite bias.</li>
                </ul>
            </div>
        `,
        comments: [
            { author: "Sophia Chen", handle: "@schen_pol", avatarBg: "bg-blue-600", initials: "SC", text: "The elite bias point is critical. Regular citizens talk about politics very differently than elected officials." },
            { author: "David K. Sterling", handle: "@dsterling", avatarBg: "bg-teal-600", initials: "DS", text: "Without knowing the exact psychological mechanism, prescribing policy solutions is tough." }
        ],
        devilsAdvocate: "If the bots only retweeted high-profile political elites, could the backfire effect just be anti-elite hostility rather than ideological disagreement?"
    },
    {
        id: 7,
        author: "David K. Sterling",
        handle: "@dsterling_media",
        avatarBg: "bg-teal-600",
        avatarLetter: "DS",
        time: "2m ago",
        headline: "Connecting to Course Literature",
        tweetText: "Connecting to course concepts: Bail et al. directly challenges Sunstein's Republic.com & Pariser's Filter Bubble thesis.",
        stats: { replies: 15, retweets: 54, likes: 240 },
        detailed: `
            <div class="text-white text-lg space-y-5 leading-relaxed">
                <ul class="list-disc pl-6 space-y-4">
                    <li><strong>Filter Bubbles & Selective Exposure:</strong> Directly tests and complicates claims made by Sunstein and Pariser regarding online segregation.</li>
                    <li><strong>Democratic Deliberation:</strong> Challenges classical assumptions that online exposure to cross-cutting debate naturally builds consensus.</li>
                    <li><strong>Computational Social Science:</strong> Represents a major methodological advancement combining surveys, bot technology, and digital trace data.</li>
                </ul>
            </div>
        `,
        comments: [
            { author: "Dr. Aris Thorne", handle: "@athorne_soc", avatarBg: "bg-amber-600", initials: "AT", text: "It turns out bursting filter bubbles might actually be dangerous for democratic consensus building." },
            { author: "Jordan Reed", handle: "@jreed_soc", avatarBg: "bg-indigo-600", initials: "JR", text: "A textbook example of how empirical research overturns intuitive normative theory." }
        ],
        devilsAdvocate: "If filter bubbles protect people from psychological backfire, should we stop trying to pop them altogether?"
    },
    {
        id: 8,
        author: "Media & Politics Chair",
        handle: "@PolMedia2026",
        avatarBg: "bg-twitter-blue",
        avatarLetter: "MP",
        time: "Just now",
        headline: "Class Discussion Questions",
        tweetText: "Discussion Qs: 1) Should algorithm designers stop recommending opposing views? 2) Why were Republicans more prone to backfire? (Press '6' for Devil's Advocate!)",
        stats: { replies: 31, retweets: 95, likes: 410 },
        detailed: `
            <div class="text-white text-lg space-y-5 leading-relaxed">
                <ol class="list-decimal pl-6 space-y-4">
                    <li><strong>Algorithmic Responsibility:</strong> If exposing users to opposing views increases polarization, what responsibility do social media platforms have when designing recommendation algorithms?</li>
                    <li><strong>Partisan Asymmetry:</strong> Why did Republicans experience significant backfire while Democrats did not?</li>
                </ol>
                <p class="mt-6 p-4 bg-twitter-darkCard rounded-xl border border-twitter-border text-base text-twitter-grayText">💡 <em>Tip: Press key <strong>'6'</strong> on your keyboard to inject the Devil's Advocate challenge directly into this tweet's comment thread!</em></p>
            </div>
        `,
        comments: [
            { author: "Prof. Sarah Jenkins", handle: "@sjenkins_pol", avatarBg: "bg-purple-600", initials: "SJ", text: "Fantastic presentation! Let's open the floor for general class discussion." }
        ],
        devilsAdvocate: "If exposing users to opposing views makes them double down on their beliefs, should recommendation algorithms just give up on cross-cutting exposure entirely?"
    }
];