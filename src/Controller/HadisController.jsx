import axios from "axios";

class HadisController {
  async getRandomHadis() {
    try {
      const response = await axios.get(
        "https://api.myquran.com/v2/hadits/perawi/acak"
      );
      return response.data;
    } catch (error) {
      console.error("Error Fetching Data", error);
      throw error;
    }
  }
}

export default HadisController;

/**

    {
    "number": 55,
    "arab": "حَدَّثَنَا سَهْلُ بْنُ أَبِي سَهْلٍ وَمُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ يَزِيدَ قَالَا حَدَّثَنَا سُفْيَانُ عَنْ الزُّهْرِيِّ عَنْ سَالِمٍ عَنْ أَبِيهِ قَالَسَمِعَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ رَجُلًا يَعِظُ أَخَاهُ فِي الْحَيَاءِ فَقَالَ إِنَّ الْحَيَاءَ شُعْبَةٌ مِنْ الْإِيمَانِ",
    "id": "Telah menceritakan kepada kami [Sahl bin Abu Sahl] dan [Muhammad bin Abdullah bin Yazid] keduanya berkata; telah menceritakan kepada kami [Sufyan] dari [Az Zuhri] dari [Salim] dari [Bapaknya] ia berkata; \"Nabi shallallahu 'alaihi wasallam mendengar seorang lelaki memberi nasihat kepada saudaranya tentang malu. Maka Rasulullah shallallahu 'alaihi wasallam bersabda: \" Sesungguhnya malu adalah bagian iman.\""
}

 */
