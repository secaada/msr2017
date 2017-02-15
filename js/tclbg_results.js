var countingGraph = {
	bindto: '#energy_winner',
    data: {
      columns: [
      ['Java count'      ,0,0,4,5,0,0,0,0,0,0],
      ['Javascript count',5,5,1,0,0,5,5,5,0,5],
      ['NDK count'       ,0,0,0,0,5,0,0,0,5,0]
      ],
      type: 'bar',
      groups : [['Java count','Javascript count','NDK count']]
    },
    axis: {
      x: {
        type: 'category',
        categories:['binarytrees',
        'fannkuch',
        'fasta',
        'fastap',
        'knucleotide',
        'nbody',
        'regexdna',
        'regexdnap',
        'revcomp',
        'spectral']
      },
      y : {
        label : 'Energy count',
        tick: {
            // this also works for non timeseries data
            values: [0, 1,2,3,4,5]
        }
      },
      rotated : false
    },
    legend: {
        position: 'right'
    }
};

var performanceGraph = {
	bindto: '#performance_winner',
    data: {
      columns: [
      ['Java count'      ,2,4,4,3,0,0,0,0,0,0],
      ['Javascript count',3,0,0,0,0,5,5,5,0,0],
      ['NDK count'       ,0,1,1,2,5,0,0,0,5,5]
      ],
      type: 'bar',
      groups : [['Java count','Javascript count','NDK count']]
    },
    axis: {
      x: {
        type: 'category',
        categories:['binarytrees',
        'fannkuch',
        'fasta',
        'fastap',
        'knucleotide',
        'nbody',
        'regexdna',
        'regexdnap',
        'revcomp',
        'spectral']
      },
      y : {
        label : 'Performance count',
        tick: {
            // this also works for non timeseries data
            values: [0,1,2,3,4,5]
        }
      },
      rotated : false
    },
    legend: {
        position: 'right'
    }
};

c3.generate(countingGraph);
countingGraph['bindto']='#energy_winner_donut';
countingGraph['data']['type']='donut';
c3.generate(countingGraph);

c3.generate(performanceGraph);
performanceGraph['bindto']='#performance_winner_donut';
performanceGraph['data']['type']='donut';
c3.generate(performanceGraph);