// cards six in arrays
const cardsArray = [
    {
        name:'children',
        image: 'https://bl3302files.storage.live.com/y4mG52qhdArZOY_AFcik_m_NhIBDyALDIxTc_gLxdHIGQGpfNEHl3EaO7P4zHce25-nVlktzGLTdrgm0gITjuBmNm9ht6wmGInIijUsMZXI5Z1NXJaUi84w1tWZoUgSmQA3mewuTfG3mlQLxz1PH1HIumYWkb3oWeKtQ-5ACenT3VoYuHeUfiu0D5rJunSzKcO3?width=300&height=300&cropmode=none',  
    },

    {   name:'children',
        image: 'https://bl3302files.storage.live.com/y4mG52qhdArZOY_AFcik_m_NhIBDyALDIxTc_gLxdHIGQGpfNEHl3EaO7P4zHce25-nVlktzGLTdrgm0gITjuBmNm9ht6wmGInIijUsMZXI5Z1NXJaUi84w1tWZoUgSmQA3mewuTfG3mlQLxz1PH1HIumYWkb3oWeKtQ-5ACenT3VoYuHeUfiu0D5rJunSzKcO3?width=300&height=300&cropmode=none',  
    },

    {   name: 'child1',
        image: 'https://bl3302files.storage.live.com/y4mS-cDc-sKuV9UzHUZCwEvhzoiiXfwkqrfzVuGfGfyVPumgRMGmf4jcTj0cwaIuH_GA82bEghcbgr6t_PT5Z-Q49grt3kniHff_iZyQhM9gPNRwrV91Hdh4LcGYzPTGUTvipjYe3Yf62sifJC8QYIryZZ71Aje3ZGx32VcPzcesJBAON_yDJtG7tBWbhql5lYM?width=300&height=300&cropmode=none',
    },

    {   name: 'child1',
        image: 'https://bl3302files.storage.live.com/y4mS-cDc-sKuV9UzHUZCwEvhzoiiXfwkqrfzVuGfGfyVPumgRMGmf4jcTj0cwaIuH_GA82bEghcbgr6t_PT5Z-Q49grt3kniHff_iZyQhM9gPNRwrV91Hdh4LcGYzPTGUTvipjYe3Yf62sifJC8QYIryZZ71Aje3ZGx32VcPzcesJBAON_yDJtG7tBWbhql5lYM?width=300&height=300&cropmode=none',
    },

    {   name: 'child2',
        image: 'https://bl3302files.storage.live.com/y4mXi_sXQZxnRLl9UoI2pz6i7uFh7agsHYh5fyFVLK2pAsQcyffBzOp1YOAARGRaTwrxMnta2IUbRdCTIT9N0rYII06ZqDZhtn1KK042O7pa-sAHdIUNBdJArJMdXhdLzwwhShs2P37TDfdKH3omYgN8wz_WKNvyKMDPduILTX6ISFX3DPwftc9CTrM710vSIUk?width=300&height=300&cropmode=none',
    },

    {   name: 'child2',
        image: 'https://bl3302files.storage.live.com/y4mXi_sXQZxnRLl9UoI2pz6i7uFh7agsHYh5fyFVLK2pAsQcyffBzOp1YOAARGRaTwrxMnta2IUbRdCTIT9N0rYII06ZqDZhtn1KK042O7pa-sAHdIUNBdJArJMdXhdLzwwhShs2P37TDfdKH3omYgN8wz_WKNvyKMDPduILTX6ISFX3DPwftc9CTrM710vSIUk?width=300&height=300&cropmode=none',
    },

    {   name: 'child3',
        image: 'https://bl3302files.storage.live.com/y4mSo-V2C_ODFsIjAPhVrY7aNIvVRLAhOh6022dYX6Xyi0ZXpynBt5EidceEmPID-hy6o5xb7AHBL6oKiXGGhmBtQN7js86DNDaXyC2RdaXISEW6cJiWr_j9gepdrUNE2Y0KLjna6jCn0pFH56TPgUW6lxphe62AC2HOX__wcR6eZ4E6bvdWaSfCihJ-zCswNaX?width=300&height=300&cropmode=none',
    },

    {   name: 'child3',
        image: 'https://bl3302files.storage.live.com/y4mSo-V2C_ODFsIjAPhVrY7aNIvVRLAhOh6022dYX6Xyi0ZXpynBt5EidceEmPID-hy6o5xb7AHBL6oKiXGGhmBtQN7js86DNDaXyC2RdaXISEW6cJiWr_j9gepdrUNE2Y0KLjna6jCn0pFH56TPgUW6lxphe62AC2HOX__wcR6eZ4E6bvdWaSfCihJ-zCswNaX?width=300&height=300&cropmode=none',
    },

    {   name: 'parents',
        image: 'https://bl3302files.storage.live.com/y4mbOrvUQPtDakKeKQok3WuNkl28qaJCzerLwt_IJPHjjdfF2esPiUUpOtNDQuvJbwZnBhZjRB7LxDayjBTObpW9aSzSxq8qh5TR6IwlcoaPF6tURF3HwQ_PS_jscdFuvquaCqx_n_d68BjlaIzjQ5Ht621mztyt0wtQYqYu-h9L9QHNHS5-zzAfTc_1rtFSp_s?width=300&height=300&cropmode=none',
    },

    {   name: 'parents',
        image: 'https://bl3302files.storage.live.com/y4mbOrvUQPtDakKeKQok3WuNkl28qaJCzerLwt_IJPHjjdfF2esPiUUpOtNDQuvJbwZnBhZjRB7LxDayjBTObpW9aSzSxq8qh5TR6IwlcoaPF6tURF3HwQ_PS_jscdFuvquaCqx_n_d68BjlaIzjQ5Ht621mztyt0wtQYqYu-h9L9QHNHS5-zzAfTc_1rtFSp_s?width=300&height=300&cropmode=none',
    },

    {   name: 'gizmo',
        image: 'https://bl3302files.storage.live.com/y4mlKlCY9eBFZFzhGCH4JZ0um5Ni9RUCw6n1nZX5Qon2a7WMAdghovv3nWxgFhX5tkzDMyjRcOkiyS-MkkMgNXdE-yY4bVhLOBG3afFarPQJufC-c6MAy_0B0erzbOZKMqi4OwQW_-La0xhqFDapCqbFmAX-rSlciiPH5RdEqtzMy_WUTtkPvOyapFPn2OPTKEe?width=300&height=300&cropmode=none',
    },

    {   name: 'gizmo',
        image: 'https://bl3302files.storage.live.com/y4mlKlCY9eBFZFzhGCH4JZ0um5Ni9RUCw6n1nZX5Qon2a7WMAdghovv3nWxgFhX5tkzDMyjRcOkiyS-MkkMgNXdE-yY4bVhLOBG3afFarPQJufC-c6MAy_0B0erzbOZKMqi4OwQW_-La0xhqFDapCqbFmAX-rSlciiPH5RdEqtzMy_WUTtkPvOyapFPn2OPTKEe?width=300&height=300&cropmode=none',
    },

]

// game board

const gameBoard = document.querySelector('.grid')

function createBoard()
