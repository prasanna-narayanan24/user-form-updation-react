import profileImages from "../assets/profile-pics/loadProfilePics";

export default {
    name: 'Karthikeyini SK',
    logo: profileImages[0],
    location: 'Chennai, India',
    accountInformation: {
        email: 'karthikeyini@gmail.com',
        password: '*********',
        dob: "November 14, 1997",
        bio: "Biodata is an abbreviation for the term biographical data. ... The biodata format includes relevant factual information about an individual, such as: personal information (e.g., date of birth, gender, marital status, religion, height, complexion, father's name, etc.) educational background. occupational history."
    },
    settings: [
        { name: "Show Notification", value: true },
        { name: "Dark theme", value: false },
        { name: "Ad-Blocks", value: false },
        { name: "Send email updates", value: true }
    ],
    contacts: {
        phone: "+91 9983092199",
        email: "karthikeyini@gmail.com",
        link: "www.google.com"
    },
    activities: [
        {
            name: "Started following Mark Zuckerberg",
            timestamp: "1d ago",
        },
        {
            name: "Liked StarSport's page",
            timestamp: "1d ago",
        },
        {
            name: "Reacted to Remote's profile pic",
            timestamp: "1d ago",
        },
        {
            name: "Liked Gold's comment",
            timestamp: "1d ago",
        },
    ],
}