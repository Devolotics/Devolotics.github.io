const sponsorsList = [
    {
        image_url:
            "https://www.bisecthosting.com/images/logo-dark-theme.svg?0b660e7978f5e193a95067f6258dcc5a",
        url: "https://www.bisecthosting.com/",
    },
    {
        image_url:
            "https://media.discordapp.net/attachments/1208584897183227926/1208584936660013106/sp_2.png?ex=65e3d16f&is=65d15c6f&hm=39fd4e7810b79e6ff466aba5eb9505c0d2a4adc04533dafb6b0128efc5ad864c&=&format=webp&quality=lossless",
        url: "http://rizvielectronics.com/",
    },
    {
        image_url:
            "https://media.discordapp.net/attachments/1208584897183227926/1208584936920191026/sp_3.png?ex=65e3d16f&is=65d15c6f&hm=53deeb59a0d95a394edb8df9fe990e02fbd348c87c0cb8556151e27139dbd5e9&=&format=webp&quality=lossless",
        url: "https://www.junkshark.ca/",
    },
    {
        image_url:
            "https://media.discordapp.net/attachments/1208584897183227926/1208585156496199843/sp_4.png?ex=65e3d1a3&is=65d15ca3&hm=fb5c94bc95239247024933af2e364ddc1a87d24b0ccbee7eca79f82e2e78fea6&=&format=webp&quality=lossless",
        url: "https://www.tdsb.on.ca/",
    },
    {
        image_url:
            "https://harrisandpartnersinc.com/wp-content/uploads/2023/08/logo.png.webp",
        url: "https://harrisandpartnersinc.com/",
    },
    {
        image_url:
            "https://media.discordapp.net/attachments/1208584897183227926/1208586205336305804/sp_6.png?ex=65e3d29d&is=65d15d9d&hm=41a4812a9894acdd57e6b354f6aae25531e6df631d67b6432fa3c34bc6ed9911&=&format=webp&quality=lossless",
        url: "https://www.studica.ca/en/",
    },
    {
        image_url:
            "https://0901.nccdn.net/4_2/000/000/038/2d3/bnnr1_1.png#RDAMDAID17280428",
        url: "http://www.serosima.ca/",
    },
    {
        image_url:
            "https://images.squarespace-cdn.com/content/v1/60a27ebca81908067631e3a1/487408e3-ee7c-42e5-819f-05721a34cf75/gb_mint-01.png?format=1500w",
        url: "https://goodbehaviourto.ca/",
    },
    {
        image_url:
            "https://media.discordapp.net/attachments/1208584897183227926/1208591983854100571/image-removebg-preview_2.png?ex=65e3d7ff&is=65d162ff&hm=21768c210b69354a5e7ad97eee4fdd340de459b44d7c836a4d6eda87a75d9bc5&=&format=webp&quality=lossless",
        url: "https://www.computer-talk.com",
    },
    {
        image_url:
            "https://media.discordapp.net/attachments/1208584897183227926/1208586205554540724/sp_10.png?ex=65e3d29d&is=65d15d9d&hm=9afc4e254e7102957886f1e191fc0056db5a2ca510d94cebdac8cc1e73ef9404&=&format=webp&quality=lossless",
        url: "",
    },
    {
        image_url:
            "https://media.discordapp.net/attachments/1208584897183227926/1208586206133092413/sp_11.png?ex=65e3d29d&is=65d15d9d&hm=2f76dbea0fab20fe43ae56453883ba1958c61e2bf627328df87c1ac2c031ae57&=&format=webp&quality=lossless&width=875&height=389",
        url: "",
    },
    {
        image_url:
            "https://media.discordapp.net/attachments/1208584897183227926/1208591039343104030/79a74f_9f55c74f22d44fc3a0b14ce1af35bdbdmv2.webp?ex=65e3d71e&is=65d1621e&hm=30fad1e6038183ca9b6ad1819a0db00070cf6762bece285957844708fa7f1d2e&=&format=webp",
        url: "https://www.malfar.ca/",
    },
    {
        image_url:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1708739881/Sponsors/Logos/1.png",
        url: "https://luckylins.ca",
    },
];

const sponsors_table = document.getElementById("sponsors_table");

for (let i = 0; i < sponsorsList.length; i += 4) {
    const row = document.createElement("tr");
    for (let j = 0; j < 4 && i + j < sponsorsList.length; j++) {
        const cell = document.createElement("td");
        const anchor = document.createElement("a");
        const img = document.createElement("img");

        anchor.className = "sponsor_box";
        anchor.href = sponsorsList[i + j].url;
        img.src = sponsorsList[i + j].image_url;

        anchor.appendChild(img);
        cell.appendChild(anchor);
        row.appendChild(cell);
    }
    sponsors_table.appendChild(row);
}
