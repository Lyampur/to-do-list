Vue.component('todo-list', {
  template: `
  <div>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="milestone of sortedMilestones">
        {{milestone.job}}
        <div>
          <span class="badge badge-primary badge-pill pointer" :class="milestone.completed ? 'badge-success' : 'badge-primary'" @click="toggleComplete(milestone)">{{milestone.time}}</span>
          <a class="pointer" @click="deleteMilestone(milestone)">❌</a>
        </div>
      </li>
    </ul>

    <div class="form-inline justify-content-between mt-3">
      <input type="text" class="form-control col-sm-9 mr-3" placeholder="your job @ time" v-model="newMilestone" @keyup.enter="addMilestone">
      <button class="btn btn-primary col-sm-2" @click="addMilestone">Add</button>
    </div>
  </div>
  `,

  data() {
    return {
      newMilestone: '',

      milestones: [
        {job: 'Make dinner', time: '10:00', completed: true},
        {job: 'Make programm', time: '14:00', completed: false},
        {job: 'Get yourself clean', time: '7:00', completed: false},
      ],
    };
  },

  mounted() {
  },

  computed: {

    // сортируем элементы по времени, разделяем по ":" и объеденяем, т.о. получаем число, которое можно сравнивать
    sortedMilestones() {
      return this.milestones.sort((a, b) => a.time.split(':').join('') - b.time.split(':').join(''));
    },
  },

  methods: {
    addMilestone() {
      if (this.newMilestone.includes('@')) {
        let arr = this.newMilestone.split('@');

        this.milestones.push({job: arr[0], time: arr[1], completed: false});
      } else {
        alert('Следуйте правилу: задача @ время');
      }

      this.newMilestone = '';
    },

    // по нажатию можем изменать завершенность задачи (цвет)
    toggleComplete(milestone) {
      milestone.completed = ! milestone.completed;
    },

    deleteMilestone(milestone) {
      // удаляем элемент по индексу, который получаем путем сравнения исходного массива
      // с элементом на который нажали
      return this.milestones.splice(this.milestones.indexOf(milestone, 0), 1);
    },
  }
});

let app = new Vue({
  el: '#root',

  data: {

  },

  computed: {

  },

  methods: {

  },

  mounted() {

  },
})
