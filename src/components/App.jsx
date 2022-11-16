import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

import { AppWrapper } from './StyledComponents';

const initialData = {
  total: 33627,
  totalHits: 500,
  hits: [
    {
      id: 2295434,
      pageURL:
        'https://pixabay.com/photos/spring-bird-bird-tit-spring-blue-2295434/',
      type: 'photo',
      tags: 'spring bird, bird, tit',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/gb8f992d4038fc1ccae400833a04cfaf913f9870db1ade8f8bb3ad4ed6ec4819ec47f260c37373ab645dca5a5ef0a5f44a57e5f12b2f03e955325586fca587c2d_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g0c57b960f14244f488dd42de85375e9dd5d8423d15528cd9c89f9784c3ead3292b1f26ff4a7c69bef3fa80e824fe3e8c93f6b0417b89a04bf415495294565190_1280.jpg',
      imageWidth: 5363,
      imageHeight: 3575,
      imageSize: 2938651,
      views: 574371,
      downloads: 322092,
      collections: 2002,
      likes: 1943,
      comments: 240,
      user_id: 334088,
      user: 'JillWellington',
      userImageURL:
        'https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg',
    },
    {
      id: 3063284,
      pageURL:
        'https://pixabay.com/photos/rose-flower-petal-floral-noble-3063284/',
      type: 'photo',
      tags: 'rose, flower, petal',
      previewURL:
        'https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g0ffc944cd317bf79fca17df8f17abcb986cfd82c7ee0415fd29ea9fe40d8fdba8e9916470cd8cb7085e11b1055ce181bb1a4cc06b2a42f6c61c2159d65196516_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g1a3421a79be215f1e9e43079418505a71288df6f2d7492c686143ae56a2c82e92b54e6f47488813965e3cd71cf1d06d4ad310c40777f0017b18b7eb69d9bfc15_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 3574625,
      views: 1018799,
      downloads: 656979,
      collections: 1374,
      likes: 1509,
      comments: 330,
      user_id: 1564471,
      user: 'anncapictures',
      userImageURL:
        'https://cdn.pixabay.com/user/2015/11/27/06-58-54-609_250x250.jpg',
    },
    {
      id: 1127174,
      pageURL:
        'https://pixabay.com/photos/sunflower-flower-plant-petals-1127174/',
      type: 'photo',
      tags: 'sunflower, flower, plant',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/gca9e58581158cbfdcb643c1b1a81aa0b949493d9ba2f3f8e19494376e3cd10b1e876ff47eaaeeac18a0b2b98195e20487ec55a73a6882fdd7af8cdb42fa61bec_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/ga1f2dcb17226cd3e8817332fefc3fdf0091b0c9181d0338f8fcb9808ec6dfec08bf237b223717e8b55dc6b6c63ea14fb9d9a013c5fd812ac566e5ff0597bbb9f_1280.jpg',
      imageWidth: 4752,
      imageHeight: 3168,
      imageSize: 3922163,
      views: 432193,
      downloads: 270229,
      collections: 1040,
      likes: 1041,
      comments: 149,
      user_id: 1445608,
      user: 'mploscar',
      userImageURL:
        'https://cdn.pixabay.com/user/2016/01/05/14-08-20-943_250x250.jpg',
    },
    {
      id: 887443,
      pageURL:
        'https://pixabay.com/photos/flower-life-yellow-flower-crack-887443/',
      type: 'photo',
      tags: 'flower, life, yellow flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2015/08/13/20/06/flower-887443_150.jpg',
      previewWidth: 150,
      previewHeight: 116,
      webformatURL:
        'https://pixabay.com/get/gf9a5a110aacb7771f3177c4328c400ea0acd01de9bcfeecc9760a7ea348b30422bb01b860174a744ec9a08af68125bc1_640.jpg',
      webformatWidth: 640,
      webformatHeight: 497,
      largeImageURL:
        'https://pixabay.com/get/ge3ea554920c1061e922f228b588ab86bbaee40d5f0e700f5a42a8e70cd866e1e5573e89dc18d7ad3897bdd3d5d9071aca399ae92a79ea6b4b1625fe0990ce92b_1280.jpg',
      imageWidth: 3867,
      imageHeight: 3005,
      imageSize: 2611531,
      views: 337482,
      downloads: 199516,
      collections: 836,
      likes: 1151,
      comments: 196,
      user_id: 1298145,
      user: 'klimkin',
      userImageURL:
        'https://cdn.pixabay.com/user/2017/07/18/13-46-18-393_250x250.jpg',
    },
    {
      id: 3113318,
      pageURL:
        'https://pixabay.com/photos/sunflower-nature-flora-flower-3113318/',
      type: 'photo',
      tags: 'sunflower, nature, flora',
      previewURL:
        'https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/gabc7db24a8856bd20b77d4a30808c87fc9f147eee19abc3eb32d6ba8df0f8ef07b2bee4815e205627e4995cf09d525fa02e4d63fcae7b332bb5d36331988ce1b_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g37e6d705ca21cf9c2b91f4ca0de86d9d40e7ace6fdc5b1178910c75392b8b093370939fb3aa31896ff0d1b41122a5c49782f1d719cb1ba40577f4de96ebc006e_1280.jpg',
      imageWidth: 2736,
      imageHeight: 1824,
      imageSize: 1026006,
      views: 573814,
      downloads: 416312,
      collections: 677,
      likes: 992,
      comments: 155,
      user_id: 7410713,
      user: 'bichnguyenvo',
      userImageURL:
        'https://cdn.pixabay.com/user/2017/12/16/10-28-39-199_250x250.jpg',
    },
    {
      id: 1627193,
      pageURL:
        'https://pixabay.com/photos/sunflower-yellow-flower-pollen-1627193/',
      type: 'photo',
      tags: 'sunflower, yellow, flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/08/28/23/24/sunflower-1627193_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g3872eb3ecc70e69bb9bf802451d1b4517d26f4abe98760edee2b3fdbf8b32ab43e7bf37f49d3b85f4d023b76992dafc60d2710c6af2be225611629703c35876a_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/gbe7c5bff7970de79add6b95843fa756cfc1dc3c960f1106fcb6eb82fb6a9abb98c694cf649d6fa31ea837b294679401e36e45b3fdb7368f03f584407cdf86c2f_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 5414839,
      views: 292329,
      downloads: 135947,
      collections: 731,
      likes: 665,
      comments: 129,
      user_id: 1834854,
      user: 'ulleo',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/02/27/09-13-19-744_250x250.jpg',
    },
    {
      id: 3792914,
      pageURL:
        'https://pixabay.com/photos/hd-wallpaper-nature-wallpaper-3792914/',
      type: 'photo',
      tags: 'hd wallpaper, nature wallpaper, sunflowers',
      previewURL:
        'https://cdn.pixabay.com/photo/2018/11/03/21/42/sunflowers-3792914_150.jpg',
      previewWidth: 150,
      previewHeight: 69,
      webformatURL:
        'https://pixabay.com/get/gc2df8b7e8a25d39dccd4620162c5d56e25dfceeef299a4f59b3eec16188cf4724dfba3499f13d8d2c15ea754fa98854892b01fab982db1feb90828449e0ba561_640.jpg',
      webformatWidth: 640,
      webformatHeight: 296,
      largeImageURL:
        'https://pixabay.com/get/gd8be3259f38723bf944e421ae2c5d1524ff62513cd33a9917f550efc28a47c73687feb4bb02b2be339ddab805a8606a1ebceddcf7a9a1f641e1ad0134dd164d4_1280.jpg',
      imageWidth: 6000,
      imageHeight: 2780,
      imageSize: 3835319,
      views: 285107,
      downloads: 186384,
      collections: 600,
      likes: 682,
      comments: 146,
      user_id: 165106,
      user: 'suju-foto',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/09/14/17-45-19-564_250x250.jpeg',
    },
    {
      id: 2145539,
      pageURL: 'https://pixabay.com/photos/crocus-flower-wet-spring-2145539/',
      type: 'photo',
      tags: 'crocus, flower, wet',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/03/15/09/00/crocus-2145539_150.jpg',
      previewWidth: 150,
      previewHeight: 91,
      webformatURL:
        'https://pixabay.com/get/gb51aae3ab5bfcaea0674e5a02e7d16ad80d8b26167583a5375b78defcbeff1794d8a4c5d7c8837c0797e45e4cf1beb28a635e6a19165082ddcfa6abe781151d7_640.jpg',
      webformatWidth: 640,
      webformatHeight: 390,
      largeImageURL:
        'https://pixabay.com/get/gb2ef834b01e57068fe48e8ea3b59cbc374ef48ab9363df54140f2fab4c658ebc57eeab203a86367b790d4eaf279d5c36a1ce6adce0f1731cf9852445d055e488_1280.jpg',
      imageWidth: 4000,
      imageHeight: 2443,
      imageSize: 823922,
      views: 141959,
      downloads: 94421,
      collections: 572,
      likes: 677,
      comments: 70,
      user_id: 2364555,
      user: 'pixel2013',
      userImageURL:
        'https://cdn.pixabay.com/user/2020/07/25/21-10-11-80_250x250.jpg',
    },
    {
      id: 729515,
      pageURL:
        'https://pixabay.com/photos/flower-beautiful-bloom-blooming-729515/',
      type: 'photo',
      tags: 'flower, beautiful, bloom',
      previewURL:
        'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729515_150.jpg',
      previewWidth: 150,
      previewHeight: 97,
      webformatURL:
        'https://pixabay.com/get/g3b7e90a22f9a72e64d14c2e9250e63626a9753afb154a08921a37b1ecdd72d3d0a6f619f49e469f66a66c300e0a2e431_640.jpg',
      webformatWidth: 640,
      webformatHeight: 416,
      largeImageURL:
        'https://pixabay.com/get/gcc1c519f2e5df5b1eb19f7a200b06bac643aad8a18ce750ea730ff2af873cbc5a38bd3202a92da89234de79f41ba8ed26aa35e743d1859cd4a0ed83b4a39dc9e_1280.jpg',
      imageWidth: 1980,
      imageHeight: 1288,
      imageSize: 370390,
      views: 117283,
      downloads: 81207,
      collections: 675,
      likes: 518,
      comments: 56,
      user_id: 909086,
      user: 'Bessi',
      userImageURL:
        'https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg',
    },
    {
      id: 1512813,
      pageURL:
        'https://pixabay.com/photos/lilies-yellow-flowers-petals-1512813/',
      type: 'photo',
      tags: 'lilies, yellow, flowers',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/07/12/18/54/lilies-1512813_150.jpg',
      previewWidth: 150,
      previewHeight: 75,
      webformatURL:
        'https://pixabay.com/get/g35f1975e3c485ec4c32b67fb7be757a7299fa4d438169ff0128f26d61f5873e3418148a2556c58fd63d5d00ea46b2d5a6adcc9cb0b36d039e010209b8a3c2bbb_640.jpg',
      webformatWidth: 640,
      webformatHeight: 323,
      largeImageURL:
        'https://pixabay.com/get/g5b916b25f9fbe17bd7dadab26b7707e4966ca9c619e6c5e380db0643b8e7be36a369eff871a0c759055474de08f6b2c6a0ce9e1bd3ffa356bd91c5f3f5940bcf_1280.jpg',
      imageWidth: 3861,
      imageHeight: 1952,
      imageSize: 1037708,
      views: 171324,
      downloads: 97879,
      collections: 575,
      likes: 606,
      comments: 58,
      user_id: 2364555,
      user: 'pixel2013',
      userImageURL:
        'https://cdn.pixabay.com/user/2020/07/25/21-10-11-80_250x250.jpg',
    },
    {
      id: 1536088,
      pageURL:
        'https://pixabay.com/photos/sunflower-flower-plant-petals-1536088/',
      type: 'photo',
      tags: 'sunflower, flower, plant',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/07/23/00/12/sunflower-1536088_150.jpg',
      previewWidth: 150,
      previewHeight: 98,
      webformatURL:
        'https://pixabay.com/get/gefedb269e5303099eed23a27f1a36837f1ba79187b8085a1d7a58483926ee6d6958207d56c2eda37888b3e948a6f453307dfe2fdb2b6c76e3eafd74fb0eee8cf_640.jpg',
      webformatWidth: 640,
      webformatHeight: 419,
      largeImageURL:
        'https://pixabay.com/get/g37a09be8a0eaf31e2c938365606f2cae11a999e8ec91cd1764f3510f14587693bbfb3f26aec076d8b8fb4b242367cc420278f7e31c30934b77aaba499dbac46d_1280.jpg',
      imageWidth: 4896,
      imageHeight: 3208,
      imageSize: 5103399,
      views: 400957,
      downloads: 119796,
      collections: 533,
      likes: 577,
      comments: 92,
      user_id: 1195798,
      user: 'Couleur',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/11/12/11-09-47-160_250x250.jpg',
    },
    {
      id: 3050078,
      pageURL:
        'https://pixabay.com/photos/fog-woman-meadow-flowers-tender-3050078/',
      type: 'photo',
      tags: 'fog, woman, meadow',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/12/30/13/26/fog-3050078_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g4d24c43e8b9c4ed949fcce8a545d7a20d43abbaf6911782f2c65770aea5e9f01055f37451d516cc9df1840671799c0cc2261ffd84fa494609cdc53ee45979c6b_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/gbb6f29622b9021e3922370667aa6718e913d0aa5bf72509365705fed56159da39ed8f46fdc77397dd8d1e9efb656e9a3874e1e023ec418e53acf7c982b322843_1280.jpg',
      imageWidth: 5472,
      imageHeight: 3648,
      imageSize: 3473927,
      views: 130983,
      downloads: 85648,
      collections: 514,
      likes: 575,
      comments: 84,
      user_id: 6663646,
      user: 'ThuyHaBich',
      userImageURL:
        'https://cdn.pixabay.com/user/2017/11/17/08-35-57-188_250x250.jpg',
    },
    {
      id: 791450,
      pageURL:
        'https://pixabay.com/photos/iphone-iphone-6-iphone-6-plus-apple-791450/',
      type: 'photo',
      tags: 'iphone, iphone 6, iphone 6 plus',
      previewURL:
        'https://cdn.pixabay.com/photo/2015/05/31/12/14/iphone-791450_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g980fa21c4929bb6bbc4d72392164e6c150d727d82e739bd79618d3b88c94348dd5cdecd74d30a644d295edeff5aefa23_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g8327ed9bb210171dad2ae42f6cad37d4392c6f63a0d5c90b925fa287452abd2c3891c1987d9060da4f47401ced7036f9dd8c5274f6955c32352226412f14ffd8_1280.jpg',
      imageWidth: 5254,
      imageHeight: 3503,
      imageSize: 1909143,
      views: 166430,
      downloads: 110118,
      collections: 672,
      likes: 377,
      comments: 68,
      user_id: 1013994,
      user: 'kaboompics',
      userImageURL:
        'https://cdn.pixabay.com/user/2018/04/09/00-31-22-504_250x250.jpg',
    },
    {
      id: 3215188,
      pageURL:
        'https://pixabay.com/photos/flowers-orange-orange-petals-3215188/',
      type: 'photo',
      tags: 'flowers, orange, orange petals',
      previewURL:
        'https://cdn.pixabay.com/photo/2018/03/10/20/26/flowers-3215188_150.jpg',
      previewWidth: 150,
      previewHeight: 83,
      webformatURL:
        'https://pixabay.com/get/gb38e0291bf78c6f496343654034dea81c83f70bcfb0f5c29ed4982d8c694d121d7b90f251ec531315aa3138a660b24d825161363ef5ff9d487d35a3cf7537b7a_640.jpg',
      webformatWidth: 640,
      webformatHeight: 358,
      largeImageURL:
        'https://pixabay.com/get/g2f5f017821ff9a0e9346473cf339359cf3176fb61446e8cc3ffa814873e18647047fcfd4617a6dd760289e8aea6dc9bb6c50c339b9278eff35bf667d9d1ecba6_1280.jpg',
      imageWidth: 2027,
      imageHeight: 1134,
      imageSize: 399066,
      views: 203404,
      downloads: 142623,
      collections: 444,
      likes: 483,
      comments: 118,
      user_id: 7097598,
      user: 'Candiix',
      userImageURL:
        'https://cdn.pixabay.com/user/2017/12/06/20-08-45-84_250x250.jpg',
    },
    {
      id: 1643794,
      pageURL: 'https://pixabay.com/photos/sunflower-bee-macro-pollen-1643794/',
      type: 'photo',
      tags: 'sunflower, bee, macro',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/09/04/12/05/sunflower-1643794_150.jpg',
      previewWidth: 150,
      previewHeight: 113,
      webformatURL:
        'https://pixabay.com/get/g2bcb75e5e5db659f571848fd001d9b60887772d2783f1a47d60af5522ef82a848b51e81a59b3f109fa943317e30f11e77c2719e121a331df2e17e7da3a31a7d3_640.jpg',
      webformatWidth: 640,
      webformatHeight: 484,
      largeImageURL:
        'https://pixabay.com/get/ga404bc8beafdc22d897b37977c05b4ab1f6158b025b63a635cb925ae58b83637b895b8d84748007e2a34e3002c8bd0a619598a6d2dbf777fbd987ba0fd6766b5_1280.jpg',
      imageWidth: 5285,
      imageHeight: 4000,
      imageSize: 5457910,
      views: 144705,
      downloads: 102873,
      collections: 510,
      likes: 462,
      comments: 45,
      user_id: 686414,
      user: 'Alexas_Fotos',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/07/05/23-09-40-265_250x250.jpg',
    },
    {
      id: 190483,
      pageURL:
        'https://pixabay.com/photos/bike-bicycle-wheels-bicycle-wheels-190483/',
      type: 'photo',
      tags: 'bike, bicycle, wheels',
      previewURL:
        'https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g4b3a375f334fa12752467dc6e550dcb82faf21e37021045c489a64a6fc0b1b7d0caeef2781af80d0848e3dfd8d94ab4c_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g1609586bf52ad0221daeff438387d13974e1f1421ee930804a894812341bf0d3075118d47e82a1d9e810056a156e2f078c66dcf591226969ec1f8a30e1643665_1280.jpg',
      imageWidth: 2160,
      imageHeight: 1440,
      imageSize: 2093738,
      views: 160089,
      downloads: 58827,
      collections: 492,
      likes: 429,
      comments: 65,
      user_id: 55851,
      user: 'danfador',
      userImageURL: '',
    },
    {
      id: 3050076,
      pageURL:
        'https://pixabay.com/photos/portrait-girl-fog-flowers-beauty-3050076/',
      type: 'photo',
      tags: 'portrait, girl, fog',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/12/30/13/25/portrait-3050076_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g7abca0105b550e2d33ae7b5861f2e588f19f45e73c81ba5c703dbf8d0b201eef056d6bb0f7d7b95efb7ea21a333d83df571c3fc2efe8bc79e588d7e2cce2935d_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/gb274d7ee02f945a68d2fe8bacf536bf536bf0dda534fa8a6a3661effc023a7c621e72876f8257e71c0f629fb1540bdefc5339f1c10ed4ce48280780cc968fb03_1280.jpg',
      imageWidth: 5472,
      imageHeight: 3648,
      imageSize: 2914111,
      views: 222857,
      downloads: 157564,
      collections: 466,
      likes: 437,
      comments: 50,
      user_id: 6663646,
      user: 'ThuyHaBich',
      userImageURL:
        'https://cdn.pixabay.com/user/2017/11/17/08-35-57-188_250x250.jpg',
    },
    {
      id: 5143015,
      pageURL:
        'https://pixabay.com/photos/forget-me-not-pointed-flower-5143015/',
      type: 'photo',
      tags: 'forget me not, pointed flower, spring flowers',
      previewURL:
        'https://cdn.pixabay.com/photo/2020/05/07/20/12/forget-me-not-5143015_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g2e3e8384cee9830b5599385db8a368d7e78cc6687e648dbb389b3f9876babca5f6709c1949b2ceabc9ae3abecdf819e5fdf8b184082c15ed32418509d98f1b46_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g5f6577c89db1f2145599ecb7328d052423120c3ac0415a2dfddb3e9f56fc21a10ddefefc34456ad0a0bb7de563508e8df83b93cca0209d34a7badc57ed1030f3_1280.jpg',
      imageWidth: 5809,
      imageHeight: 3873,
      imageSize: 3759081,
      views: 121659,
      downloads: 96300,
      collections: 341,
      likes: 425,
      comments: 256,
      user_id: 12752456,
      user: 'mariya_m',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/10/27/21-21-00-720_250x250.jpeg',
    },
    {
      id: 1972411,
      pageURL:
        'https://pixabay.com/photos/drip-yellow-petals-globules-water-1972411/',
      type: 'photo',
      tags: 'drip, yellow, petals',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/01/11/17/27/drip-1972411_150.jpg',
      previewWidth: 150,
      previewHeight: 87,
      webformatURL:
        'https://pixabay.com/get/g75c0d7941f56387674f330ac66324cc9a0d75aa13664c1f5daec0e3ab6c2d736f729348fc20ac830b25e95812cd997ed50f59db4700e59db8642010890632277_640.jpg',
      webformatWidth: 640,
      webformatHeight: 372,
      largeImageURL:
        'https://pixabay.com/get/gb27861efd7585a9df3622088bb45ecf3317660c0ff65fb00f85a6593709ec510a3a3bec5b4cffcc779518e4f0cbccd70f54b3b5fa815073e4e388b55b08ea06a_1280.jpg',
      imageWidth: 4288,
      imageHeight: 2499,
      imageSize: 1510459,
      views: 138183,
      downloads: 112845,
      collections: 402,
      likes: 424,
      comments: 63,
      user_id: 1777190,
      user: 'susannp4',
      userImageURL:
        'https://cdn.pixabay.com/user/2015/12/16/17-56-55-832_250x250.jpg',
    },
    {
      id: 2107024,
      pageURL:
        'https://pixabay.com/photos/crocus-flowers-yellow-bloom-2107024/',
      type: 'photo',
      tags: 'crocus, flowers, yellow',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/02/28/22/37/crocus-2107024_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/gcc58e6a44d9bc555efe7ff765621304fdff9daeecb72d5375a691610149247c4a163bca804b1c5dcfaf47edff60620d3ba21ec8de6c7326863bc9a420042b5b8_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g78156775cea4539269f82754b833418ddadcab504f95a995a3931101f7356223055c5333dac1c5cd9b8de9850a51b93120906a27866ca7688337d7ec38cf2cc4_1280.jpg',
      imageWidth: 4896,
      imageHeight: 3264,
      imageSize: 2596169,
      views: 93652,
      downloads: 59224,
      collections: 549,
      likes: 281,
      comments: 50,
      user_id: 1195798,
      user: 'Couleur',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/11/12/11-09-47-160_250x250.jpg',
    },
  ],
};

// https://pixabay.com/api/?key=22654483-4e0bcca85732e009257bb92c7&q=yellow+flowers&image_type=photo

export const App = () => {
  const [imagesData, setImagesData] = useState(initialData);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  console.log(process.env, 'process.env');

  const handleSearch = newQuery => {
    if (newQuery === query) {
      console.warn('newQuery === query', newQuery === query);
      return;
    }
    console.log(newQuery);
    setQuery(newQuery);
  };

  const openImg = imgID => {
    console.log(imgID);
    setIsModalOpen(true);
    setLargeImageURL(
      imagesData.hits.find(({ id }) => id === imgID).largeImageURL
    );
    // setQuery(query);
  };

  useEffect(() => {
    // console.log(imagesData);

    return () => {
      setImagesData(initialData);
    };
  }, [imagesData]);

  useEffect(() => {
    setPage(1);
    // setIsLoading(true)
    //fetchData()
    // setImagesData(resFromFetch)
    // setIsLoading(false)
    return () => {
      // setImagesData(initialData);
    };
  }, [query]);

  return (
    <AppWrapper>
      <Searchbar onSearch={handleSearch} />
      <ImageGallery imgList={imagesData.hits} handleOpenLargeImage={openImg} />
      {isLoading && <Loader />}
      {isButtonVisible && <Button>Load more</Button>}
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          {<img src={largeImageURL} alt="" />}
        </Modal>
      )}
      <ToastContainer autoClose={3000} />
    </AppWrapper>
  );
};
