c3.generate({
    bindto: '#andofStep',
    data: {
      columns: [
        ['Java', 62.79,0.6,32.93,0.07],
        ['Javascript', 250.32,0.7,271.53,0.41],
        ['NDK', 6.26,0.17,0.37,0.03]
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
    		categories:['Time(s)',
    		'Time stdev',
    		'Energy(J)',
    		'Energy stdev']
    	}
    },
    legend: {
        position: 'right'
    }
});

c3.generate({
    bindto: '#enigmaExp',
    data: {
      columns: [
        ['Java', 89.21,2.46,38.13,0.11],
        ['Javascript', 27.78,0.89,12.22,0.06],
        ['NDK', 30.11,0.76,13.58,0.06]
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
        categories:['Time(s)',
        'Time stdev',
        'Energy(J)',
        'Energy stdev']
      }
    },
    legend: {
        position: 'right'
    }
});

c3.generate({
    bindto: '#triroseStep',
    data: {
      columns: [
        ['Java',  27.84 ,0.03 ,4.03 ,0.02],
        ['Javascript',  53.85 ,0.05 ,7.78, 0.01],
        ['NDK',  27.92 ,0.56 ,4.14 ,0.02]
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
        categories:['Time(s)',
        'Time stdev',
        'Energy(J)',
        'Energy stdev']
      }
    },
    legend: {
        position: 'right'
    }
});

c3.generate({
    bindto: '#triroseBatch',
    data: {
      columns: [
        ['Java',  26.74 ,0.02 ,3.95 ,0.02],
        ['Javascript',  27.49 ,0.03 ,4.21, 0.02],
        ['NDK', 26.75 ,0.02 ,3.97 ,0.02]
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
        categories:['Time(s)',
        'Time stdev',
        'Energy(J)',
        'Energy stdev']
      }
    },
    legend: {
        position: 'right'
    }
});

