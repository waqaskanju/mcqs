MCQS = {
    mcq1: [
      {
        id: "1",
        subject_name: "DSA",
        chapter_name: "Graph",
        question: "Which of the following statements for a simple graph is correct?",
        option_one: "Every path is a trail",
        option_two: "Every trail is a path",
        option_three: "Every trail is a path as well as every path is a trail",
        option_four: "Path and trail have no relation",
        answer: "A",
        explanation:
          "In a walk if the vertices are distinct it is called a path, whereas if the edges are distinct it is called a trail.",
      },
    ],
    mcq2: [
        {
          id: "2",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: " identify the cut vertices.<br><img src='images/graph1.webp'> ",
          option_one: "B and E",
          option_two: "C and D",
          option_three: "A and E",
          option_four: "C and B",
          answer: "D",
          explanation:
            "After removing either B or C, the graph becomes disconnected.",
        },
      ],
      mcq3: [
        {
          id: "3",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: "For the given graph(G), which of the following statements is true? <img src='graph2.webp'>",
          option_one: "G is a complete graph",
          option_two: "G is not a connected graph",
          option_three: "The vertex connectivity of the graph is 2",
          option_four: "The edge connectivity of the graph is 1",
          answer: "C",
          explanation:
            "",
        },
      ],
      mcq4: [
        {
          id: "4",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: "What is the number of edges present in a complete graph having n vertices?",
          option_one: " (n*(n+1))/2",
          option_two: " (n*(n-1))/2",
          option_three: "n",
          option_four: "insufficient information",
          answer: "",
          explanation:
            "",
        },
      ],
      mcq5: [
        {
          id: "5",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: " The given Graph is regular.<br><img src='graph3.webp'>",
          option_one: "True",
          option_two: "False",
          option_three: "Both A and B",
          option_four: "Insufficient information",
          answer: "A",
          explanation:
            "In a regular graph, degrees of all the vertices are equal. In the given graph the degree of every vertex is 3.",
        },
      ],
      mcq6: [
        {
          id: "6",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: "In a simple graph, the number of edges is equal to twice the sum of the degrees of the vertices.",
          option_one: "True",
          option_two: "False",
          option_three: "",
          option_four: "",
          answer: "B",
          explanation:
            "The sum of the degrees of the vertices is equal to twice the number of edges.",
        },
      ],
      mcq7: [
        {
          id: "7",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: " A connected planar graph having 6 vertices, 7 edges contains _____________ regions.",
          option_one: "1",
          option_two: "3",
          option_three: "11",
          option_four: "15",
          answer: "B",
          explanation:
            "By euler’s formula the relation between vertices(n), edges(q) and regions(r) is given by n-q+r=2",
        },
      ],

      mcq8: [
        {
          id: "8",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: "  If a simple graph G, contains n vertices and m edges, the number of edges in the Graph G'(Complement of G) is",
          option_one: "(n*n-n-2*m)/2",
          option_two: "(n*n+n+2*m)/2",
          option_three: "(n*n-n-2*m)/2",
          option_four: "(n*n-n+2*m)/2",
          answer: "A",
          explanation:
            "The union of G and G’ would be a complete graph so, the number of edges in G’= number of edges in the complete form of G(nC2)-edges in G(m",
        },
      ],
      mcq9: [
        {
          id: "9",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: "Which of the following properties does a simple graph not hold?",
          option_one: "Must be connected",
          option_two: "Must be unweighted",
          option_three: "Must have no loops or multiple edges",
          option_four: "Must have no multiple edges",
          answer: "A",
          explanation: "A simple graph maybe connected or disconnected.",
        },
      ],
      mcq10: [
        {
          id: "10",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: "What is the maximum number of edges in a bipartite graph having 10 vertices?",
          option_one: "16",
          option_two: "21",
          option_three: "24",
          option_four: "25",
          answer: "C",
          explanation:
            "Let one set have n vertices another set would contain 10-n vertices.Total number of edges would be n*(10-n), differentiating with respect to n, would yield the answer.",
        },
      ],
      mcq11: [
        {
          id: "11",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: "Which of the following is true?",
          option_one: "A graph may contain no edges and many vertices",
          option_two: "A graph may contain many edges and no vertices",
          option_three: "A graph may contain no edges and no vertices",
          option_four: "A graph may contain no vertices and many edges",
          answer: "B",
          explanation:
            "A graph must contain at least one vertex.",
        },
      ],
      mcq12: [
        {
          id: "12",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: "",
          option_one: "",
          option_two: "",
          option_three: "",
          option_four: "",
          answer: "",
          explanation:
            "",
        },
      ],
      mcq13: [
        {
          id: "13",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: " For which of the following combinations of the degrees of vertices, would the connected graph, be eulerian?",
          option_one: "1,2,3",
          option_two: "2,3,4",
          option_three: "2,4,5",
          option_four: "1,3,5",
          answer: "A",
          explanation:
            "",
        },
      ],
      mcq14: [
        {
          id: "14",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: "A graph with all vertices having equal degree is known as a __________",
          option_one: "Multi Graph",
          option_two: "Regular Graph",
          option_three: "Simple Graph",
          option_four: "Complete Graph",
          answer: "B",
          explanation:
            "definition of regular graphs",
        },
      ],
      mcq15: [
        {
          id: "15",
          subject_name: "DSA",
          chapter_name: "Graph",
          question: "Which of the following ways can be used to represent a graph?",
          option_one: "Adjacency List and Adjacency Matrix",
          option_two: "Incidence Matrix",
          option_three: "Adjacency List, Adjacency Matrix as well as Incidence Matrix",
          option_four: "No way to represent",
          answer: "C",
          explanation:
            "",
        },
      ],
}
