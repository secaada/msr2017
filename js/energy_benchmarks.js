var informations = {
  toJoules_LGL90 : 3.6*4.01,
  toJoules_NEXUS7 : 3.6*3.94,
  toJoules_SAMSUNGJ7 : 3.6*4.10,
  toJoules_ZENFONESELFIE : 3.6*3.97,
  toJoules_NEXUS5 : 3.6*3.95,

  mahMeansJava_LGL90 : [4.66,25.86,2.35,1.33,10.29,8.79,3.44,3.34,1.1,17.17],
  mahMeansJavascript_LGL90 :[3.30,10.42,3.67,3.67,8.42,6.40,0.25,0.25,7.81,8.35],
  mahMeansNDK_LGL90 :[12.44,20.87,5.53,5.12,2.43,18.78,2.75,2.66,0.40,11.82],
  clockMeansJava_LGL90 : [138.21,194.20,68.54,22.12,110.58,241.66,95.14,54.24,31.08,120.83],
  clockMeansJavascript_LGL90 : [89.80,271.55,102.02,102.02,226.13,169.17,11.06,11.06,213.32,225.85],
  clockMeansNDK_LGL90 : [317.75,157.15,156.19,42.67,40.57,524.36,79.59,54.38,28.40,85.45],

  mahMeansJava_NEXUS7 : [3.75,14.55,2.65,2.26,7.30,5.31,2.93,2.96,1.07,9.89],
  mahMeansJavascript_NEXUS7 :[2.69,6.18,2.38,2.38,3.67,4.04,0.28,0.28,5.42,4.10],
  mahMeansNDK_NEXUS7 :[3.94,21.18,4.21,3.94,2.68,16.62,2.55,2.58,0.45,6.24],
  clockMeansJava_NEXUS7 : [75.91,111.90,75.33,41.45,64.58,144.17,82.81,48.79,29.45,78.21],
  clockMeansJavascript_NEXUS7 : [80.19,178.89,72.79,72.79,100.98,112.19,10.80,10.80,147.39,112.86],
  clockMeansNDK_NEXUS7 : [119.60,150.63,115.15,31.57,38.11,444.28,70.55,47.94,14.35,47.01],


  mahMeansJava_SAMSUNGJ7 : [2.53,13.14,1.37,0.83,7.69,4.95,3.52,3.62,3.04,8.85],
  mahMeansJavascript_SAMSUNGJ7 :[1.81,5.43,3.03,3.03,3.01,3.39,0.19,0.19,4.62,4.36],
  mahMeansNDK_SAMSUNGJ7 :[10.82,11.39,3.39,2.96,1.75,3.84,1.33,1.43,0.14,5.84],
  clockMeansJava_SAMSUNGJ7 : [59.57,64.57,44.16,12.35,41.85,139.38,112.50,56.23,83.60,37.52],
  clockMeansJavascript_SAMSUNGJ7 : [56.36,181.67,93.41,93.41,95.83,105.24,10.95,10.95,145.96,129.97],
  clockMeansNDK_SAMSUNGJ7 : [293.88,77.23,105.95,28.80,29.16,126.26,48.46,32.28,9.44,28.91],

  mahMeansJava_ZENFONESELFIE : [9.30,55.90,5.98,4.43,25.69,11.91,7.15,7.14,3.35,38.15],
  mahMeansJavascript_ZENFONESELFIE :[8.71,20.38,7.63,7.63,14.64,9.32,0.70,0.70,16.62,17.48],
  mahMeansNDK_ZENFONESELFIE :[13.98,57.12,12.56,14.99,8.83,19.60,5.67,5.48,1.20,30.77],
  clockMeansJava_ZENFONESELFIE : [83.66,101.34,52.07,18.34,81.46,100.68,64.83,42.09,31.94,70.06],
  clockMeansJavascript_ZENFONESELFIE : [86.55,172.43,81.09,81.09,110.12,79.66,6.39,6.39,203.07,143.93],
  clockMeansNDK_ZENFONESELFIE : [119.22,123.82,113.74,57.84,45.42,152.28,59.08,43.77,12.17,63.03],
  
  mahMeansJava_NEXUS5 : [5.33,19.43,2.25,2.43,10.02,4.22,8.35,4.15,0.65,8.47],
  mahMeansJavascript_NEXUS5 :[2.23,7.29,4.04,4.04,3.15,3.00,0.38,0.38,4.27,5.02],
  mahMeansNDK_NEXUS5 :[9.16,21.34,3.65,3.71,3.11,11.46,2.51,3.42,0.17,6.37],
  clockMeansJava_NEXUS5 : [65.01,104.59,36.75,28.79,61.83,81.66,145.80,62.79,13.88,45.25],
  clockMeansJavascript_NEXUS5 : [42.06,146.98,64.08,64.08,65.17,58.23,10.28,10.28,80.84,90.75],
  clockMeansNDK_NEXUS5 : [166.08,115.30,69.12,22.49,27.07,228.82,48.32,41.43,7.78,34.47]

};

var barGraph = {
    bindto: '',
    data: {
      columns: [[0],[0],[0]],
      type: 'bar',
      colors: {
        'Energy Java':'#0066ff',
        'Energy Javascript':'#ff6600',
        'Energy NDK':'#009900'
      }
    },
    axis: {
      x: {
        type: 'category',
        categories:['BinaryTrees',
        'Fannkuch',
        'Fasta',
        'FastaP',
        'Knucleotide',
        'Nbody',
        'RegexDna',
        'RegexDnaP',
        'RevComp',
        'Spectral']
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
      columns: [[0],[0],[0]],
      type: 'line',
      colors: {
        'Time Java':'#0066ff',
        'Time Javascript':'#ff6600',
        'Time NDK':'#009900'
      }
    },
    axis: {
      x: {
        type: 'category',
        categories:['BinaryTrees','Fannkuch','Fasta','FastaP','Knucleotide','Nbody','RegexDna','RegexDnaP','RevComp','Spectral']
      },
      y : {
        label : 'Time(s)'
      }
    },
    legend: {
        position: 'right'
    }
};

var barLineGraph = {
    bindto: '',
    data: {
      columns: [[0],[0],[0],[0],[0],[0]],
      type: 'bar',
      types : {
        'Time Java':'line',
        'Time Javascript':'line',
        'Time NDK':'line'
      },
      colors: {
        'Energy Java':'#0066ff',
        'Energy Javascript':'#ff6600',
        'Energy NDK':'#009900',
        'Time Java':'#0066ff',
        'Time Javascript':'#ff6600',
        'Time NDK':'#009900'
      }
    },
    axis: {
      x: {
        type: 'category',
        categories:['BinaryTrees',
        'Fannkuch',
        'Fasta',
        'FastaP',
        'Knucleotide',
        'Nbody',
        'RegexDna',
        'RegexDnaP',
        'RevComp',
        'Spectral']
      },
      y : {
        label : 'Energy(J) and Time(s)'
      }
    },
    legend: {
        position: 'right'
    }
};

var devices = ['LGL90','NEXUS7','SAMSUNGJ7','ZENFONESELFIE','NEXUS5'];

for(var i = 0; i < devices.length; i++){
    var EnergyJava = informations['mahMeansJava_'+devices[i]];
    var EnergyJavascript = informations['mahMeansJavascript_'+devices[i]];
    var EnergyNDK = informations['mahMeansNDK_'+devices[i]];
    for(var j = 0; j < EnergyJava.length; j++){
        EnergyJava[j]*=informations['toJoules_'+devices[i]];
        EnergyJavascript[j]*=informations['toJoules_'+devices[i]];
        EnergyNDK[j]*=informations['toJoules_'+devices[i]];
    }
    EnergyJava = ['Energy Java'].concat(EnergyJava);
    EnergyJavascript = ['Energy Javascript'].concat(EnergyJavascript);
    EnergyNDK = ['Energy NDK'].concat(EnergyNDK);

    var TimeJava = ['Time Java'].concat(informations['clockMeansJava_'+devices[i]]);
    var TimeJavascript = ['Time Javascript'].concat(informations['clockMeansJavascript_'+devices[i]]);
    var TimeNDK = ['Time NDK'].concat(informations['clockMeansNDK_'+devices[i]]);

    barGraph['bindto']='#'+devices[i]+'_energy';
    barGraph['data']['columns'][0] = EnergyJava;
    barGraph['data']['columns'][1] = EnergyJavascript;
    barGraph['data']['columns'][2] = EnergyNDK;

    lineGraph['bindto']='#'+devices[i]+'_time';
    lineGraph['data']['columns'][0] = TimeJava;
    lineGraph['data']['columns'][1] = TimeJavascript;
    lineGraph['data']['columns'][2] = TimeNDK;

    /*barLineGraph['bindto']='#'+devices[i]+'_energy_time';
    barLineGraph['data']['columns'][0] = EnergyJava;
    barLineGraph['data']['columns'][1] = EnergyJavascript;
    barLineGraph['data']['columns'][2] = EnergyNDK;
    barLineGraph['data']['columns'][3] = TimeJava;
    barLineGraph['data']['columns'][4] = TimeJavascript;
    barLineGraph['data']['columns'][5] = TimeNDK;*/

    c3.generate(barGraph);
    c3.generate(lineGraph);
    //c3.generate(barLineGraph);

}



/*c3.generate({
    bindto: '#energyBenchmarksLGL90',
    data: {
      columns: [
        ['Energy Java', 4.66*LGL90_toJoules,25.86*LGL90_toJoules,2.35*LGL90_toJoules,1.33*LGL90_toJoules,10.29*LGL90_toJoules,8.79*LGL90_toJoules,3.44*LGL90_toJoules,3.34*LGL90_toJoules,1.1*LGL90_toJoules,
        17.17*LGL90_toJoules],
        ['Energy Javascript', 3.30,10.42,3.67,3.67,8.42,6.40,0.25,0.25,7.81,8.35],
        ['Energy NDK', 12.44,20.87,5.53,5.12,2.43,18.78,2.75,2.66,0.40,11.82]
      ],
      type: 'bar',
      colors: {
      	'Energy Java':'#009900',
      	'Energy Javascript':'#ff6600',
      	'Energy NDK':'#0066ff'
      }
    },
    axis: {
    	x: {
    		type: 'category',
    		categories:['BinaryTrees',
    		'Fannkuch',
    		'Fasta',
    		'FastaP',
    		'Knucleotide',
    		'Nbody',
    		'RegexDna',
    		'RegexDnaP',
    		'RevComp',
    		'Spectral']
    	}
    },
    legend: {
        position: 'right'
    }
});

c3.generate({
    bindto: '#timeBenchmarksLGL90',
    data: {
      columns: [
        ['Time Java', 138.21,194.20,68.54,22.12,110.58,241.66,95.14,54.24,31.08,120.83],
        ['Time Javascript', 89.80,271.55,102.02,102.02,226.13,169.17,11.06,11.06,213.32,225.85],
        ['Time NDK', 317.75,157.15,156.19,42.67,40.57,524.36,79.59,54.38,28.40,85.45]
      ],
      type: 'bar',
      colors: {
      	'Time Java':'#009900',
      	'Time Javascript':'#ff6600',
      	'Time NDK':'#0066ff'
      }
    },
    axis: {
    	x: {
    		type: 'category',
    		categories:['BinaryTrees','Fannkuch','Fasta','FastaP','Knucleotide','Nbody','RegexDna','RegexDnaP','RevComp','Spectral']
    	}
    },
    legend: {
        position: 'right'
    }
});

c3.generate({
    bindto: '#energyBenchmarksLGL90_2',
    data: {
      columns: [
        ['Energy Java', 4.66,25.86,2.35,1.33,10.29,8.79,3.44,3.34,1.1,17.17],
        ['Energy Javascript', 3.30,10.42,3.67,3.67,8.42,6.40,0.25,0.25,7.81,8.35],
        ['Energy NDK', 12.44,20.87,5.53,5.12,2.43,18.78,2.75,2.66,0.40,11.82]
      ],
      type: 'line',
      colors: {
      	'Energy Java':'#009900',
      	'Energy Javascript':'#ff6600',
      	'Energy NDK':'#0066ff'
      }
    },
    axis: {
    	x: {
    		type: 'category',
    		categories:['BinaryTrees',
    		'Fannkuch',
    		'Fasta',
    		'FastaP',
    		'Knucleotide',
    		'Nbody',
    		'RegexDna',
    		'RegexDnaP',
    		'RevComp',
    		'Spectral']
    	}
    },
    legend: {
        position: 'right'
    }
});

c3.generate({
    bindto: '#timeBenchmarksLGL90_2',
    data: {
      columns: [
        ['Time Java', 138.21,194.20,68.54,22.12,110.58,241.66,95.14,54.24,31.08,120.83],
        ['Time Javascript', 89.80,271.55,102.02,102.02,226.13,169.17,11.06,11.06,213.32,225.85],
        ['Time NDK', 317.75,157.15,156.19,42.67,40.57,524.36,79.59,54.38,28.40,85.45]
      ],
      type: 'line',
      colors: {
      	'Time Java':'#009900',
      	'Time Javascript':'#ff6600',
      	'Time NDK':'#0066ff'
      }
    },
    axis: {
    	x: {
    		type: 'category',
    		categories:['BinaryTrees','Fannkuch','Fasta','FastaP','Knucleotide','Nbody','RegexDna','RegexDnaP','RevComp','Spectral']
    	}
    },
    legend: {
        position: 'right'
    }
});


c3.generate({
    bindto: '#energyAndTime',
    data: {
      columns: [
        ['Energy Java', 4.66,25.86,2.35,1.33,10.29,8.79,3.44,3.34,1.1,17.17],
        ['Energy Javascript', 3.30,10.42,3.67,3.67,8.42,6.40,0.25,0.25,7.81,8.35],
        ['Energy NDK', 12.44,20.87,5.53,5.12,2.43,18.78,2.75,2.66,0.40,11.82],
        ['Time Java', 138.21,194.20,68.54,22.12,110.58,241.66,95.14,54.24,31.08,120.83],
        ['Time Javascript', 89.80,271.55,102.02,102.02,226.13,169.17,11.06,11.06,213.32,225.85],
        ['Time NDK', 317.75,157.15,156.19,42.67,40.57,524.36,79.59,54.38,28.40,85.45]
      ],
      type: 'line'
    },
    axis: {
    	x: {
    		type: 'category',
    		categories:['BinaryTrees',
    		'Fannkuch',
    		'Fasta',
    		'FastaP',
    		'Knucleotide',
    		'Nbody',
    		'RegexDna',
    		'RegexDnaP',
    		'RevComp',
    		'Spectral']
    	}
    },
    legend: {
        position: 'right'
    }
});

c3.generate({
    bindto: '#energyAndTime_2',
    data: {
      columns: [
        ['Energy Java', 4.66*LGL90_toJoules,25.86*LGL90_toJoules,2.35*LGL90_toJoules,1.33*LGL90_toJoules,10.29*LGL90_toJoules,8.79*LGL90_toJoules,3.44*LGL90_toJoules,3.34*LGL90_toJoules,1.1*LGL90_toJoules,
        17.17*LGL90_toJoules],
        ['Energy Javascript', 3.30,10.42,3.67,3.67,8.42,6.40,0.25,0.25,7.81,8.35],
        ['Energy NDK', 12.44,20.87,5.53,5.12,2.43,18.78,2.75,2.66,0.40,11.82],
        ['Time Java', 138.21,194.20,68.54,22.12,110.58,241.66,95.14,54.24,31.08,120.83],
        ['Time Javascript', 89.80,271.55,102.02,102.02,226.13,169.17,11.06,11.06,213.32,225.85],
        ['Time NDK', 317.75,157.15,156.19,42.67,40.57,524.36,79.59,54.38,28.40,85.45]
      ],
      type: 'bar',
      types: {
      	'Time Java' : 'line',
      	'Time Javascript' : 'line',
      	'Time NDK' : 'line'
      }
    },
    axis: {
    	x: {
    		type: 'category',
    		categories:['BinaryTrees',
    		'Fannkuch',
    		'Fasta',
    		'FastaP',
    		'Knucleotide',
    		'Nbody',
    		'RegexDna',
    		'RegexDnaP',
    		'RevComp',
    		'Spectral']
    	}
    },
    legend: {
        position: 'right'
    }
});*/