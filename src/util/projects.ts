import scmv2 from '../../public/img/projects/scm-v2.png';
import venture from '../../public/img/projects/venture-rp.png';

export const projects = [
    {
        name: 'SnailyCAD Manager v2',
        description: `
            SnailyCAD Manager v2 was the successor to the original SnailyCAD Manager.
            SnailyCAD Manager is a desktop application that allows users to easily manage instances of SnailyCAD.
            This was the first time I had extensively used typescript, as well as electron.
        `,
        image: scmv2,
        url: 'https://github.com/WhitigolProd/SnailyCAD-Manager',
        feature: true,
    },
    {
        name: 'Venture Roleplay FiveM',
        description: `
        I take great pride in my role as a director at Venture Roleplay, a vibrant FiveM Server.
        Within this community, I actively contribute to development and maintenance,
        further elevating my proficiency in FiveM development and showcasing my frontend skills.
        `,
        image: venture,
        url: 'https://venturerp.xyz/',
        feature: true,
    },
];
