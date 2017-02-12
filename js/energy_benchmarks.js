var cpuMeansJava = [122.98,707.33,61.86,36.50,281.56,233.38,89.58,89.36,29.88,448.45];
var cpuMeansJavascript = [85.55,265.01,94.26,94.26,220.09,163.17,7.23,7.23,194.07,216.79];
var cpuMeansJavaNDK = [314.25,573.40,148.64,146.46,67.95,510.90,73.38,73.77,10.97,310.67];

var clockMeansJava = [138.21,194.20,68.54,22.12,110.58,241.66,95.14,54.24,31.08,120.83];
var clockMeansJava = [89.80,271.55,102.02,102.02,226.13,169.17,11.06,11.06,213.32,225.85];
var clockMeansJava = [317.75,157.15,156.19,42.67,40.57,524.36,79.59,54.38,28.40,85.45];

c3.generate({
    bindto: '#energyBenchmarksLGL90',
    data: {
      columns: [
        ['Energy Java', 4.66,25.86,2.35,1.33,10.29,8.79,3.44,3.34,1.1,17.17],
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
        ['Energy Java', 4.66,25.86,2.35,1.33,10.29,8.79,3.44,3.34,1.1,17.17],
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
});