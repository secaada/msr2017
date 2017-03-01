var informations = {
  toJoules_Rosetta : 3.6*3.95,


  mahMeansJava_Rosetta : [10.27,5.46,5.30,2.75,0.76,7.09,4.35,8.20,5.77,5.32,2.97,1.87,6.27,2.04,6.22,4.73,3.12,4.83,5.72,4.36,3.19,3.01],
  mahMeansJavascript_Rosetta :[1.02,0.61,0.90,0.51,0.16,3.34,1.24,2.87,2.65,2.47,0.80,0.95,3.87,1.34,4.19,3.20,2.74,4.38,5.51,4.72,3.70,4.32],
  clockMeansJava_Rosetta :       [163.56,81.94,46.51,57.30,19.29,96.32,53.87,151.13, 70.12,101.41,53.90,37.67,58.87,43.88,63.24,62.72,64.17,92.04,91.16,73.49,56.03,55.17],
  clockMeansJavascript_Rosetta : [20.79, 16.55,19.78,13.70,12.53,67.23,26.96, 61.59,  46.06,43.00,19.51,19.82,71.26,24.71,63.46,66.50,52.58,85.35,97.39,92.09,74.99,77.81],

};

var barGraph = {
    bindto: '',
    data: {
      columns: [[0],[0]],
      type: 'bar',
      colors: {
        'Energy Javascript':'#ff6600',
        'Energy Java':'#0066ff'
      }
    },
    axis: {
      x: {
        type: 'category',
        categories:['perfect number',
        'hofstadterq',
        'zero-one knapsack',
        'knapsack unbounded',
        'nqueens',
        'matrix mult',
        'mergesort',
        'gnomesort',
        'sieve of eratosthenes',
        'bubblesort',
        'man or boy',
        'countingsort',
        'quicksort',
        'pancakesort',
        'knapsack bounded',
        'happy numbers',
        'heapsort',
        'insertsort',
        'tower of hanoi',
        'count in factors',
        'combinations',
        'shellsort']
      },
      y : {
        label : 'Energy(J)'
      }
    },
    legend: {
        position: 'right'
    }
};

var lineGraph = {
    bindto: '',
    data: {
      columns: [[0],[0]],
      type: 'line',
      colors: {
        'Time Javascript':'#ff6600',
        'Time Java':'#0066ff'
      }
    },
    axis: {
      x: {
        type: 'category',
        categories:['perfect number',
        'hofstadterq',
        'zero-one knapsack',
        'knapsack unbounded',
        'nqueens',
        'matrix mult',
        'mergesort',
        'gnomesort',
        'sieve of eratosthenes',
        'bubblesort',
        'man or boy',
        'countingsort',
        'quicksort',
        'pancakesort',
        'knapsack bounded',
        'happy numbers',
        'heapsort',
        'insertsort',
        'tower of hanoi',
        'count in factors',
        'combinations',
        'shellsort']
      },
      y : {
        label : 'Time(s)'
      }
    },
    legend: {
        position: 'right'
    }
};



var devices = ['Rosetta'];

for(var i = 0; i < devices.length; i++){
    var EnergyJava = informations['mahMeansJava_'+devices[i]];
    var EnergyJavascript = informations['mahMeansJavascript_'+devices[i]];
    for(var j = 0; j < EnergyJava.length; j++){
        EnergyJava[j]*=informations['toJoules_'+devices[i]];
        EnergyJavascript[j]*=informations['toJoules_'+devices[i]];
    }
    EnergyJava = ['Energy Java'].concat(EnergyJava);
    EnergyJavascript = ['Energy Javascript'].concat(EnergyJavascript);

    var TimeJava = ['Time Java'].concat(informations['clockMeansJava_'+devices[i]]);
    var TimeJavascript = ['Time Javascript'].concat(informations['clockMeansJavascript_'+devices[i]]);

    barGraph['bindto']='#'+devices[i]+'_energy';
    barGraph['data']['columns'][0] = EnergyJavascript;
    barGraph['data']['columns'][1] = EnergyJava;

    lineGraph['bindto']='#'+devices[i]+'_time';
    lineGraph['data']['columns'][0] = TimeJavascript;
    lineGraph['data']['columns'][1] = TimeJava;



    c3.generate(barGraph);
    c3.generate(lineGraph);
    

}