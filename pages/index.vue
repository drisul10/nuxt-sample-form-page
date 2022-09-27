<template>
  <div class="w-full lg:w-4/5 my-20">
    <form class="form-input">
      <section>
        <h2 class="section-title-input">personal details</h2>
        <div class="section-body-input">
          <div class="control-input">
            <div class="wrapper-input">
              <label for="workjobtitle" class="label-input">
                work job title
              </label>
              <input
                id="workjobtitle"
                required
                type="text"
                class="input-text"
              />
            </div>
            <div class="wrapper-input">
              <label for="photo" class="label-input">photo</label>
              <input id="photo" required type="file" class="input-text" />
            </div>
          </div>
          <div class="control-input">
            <div class="wrapper-input">
              <label for="firstname" class="label-input">first name</label>
              <input id="firstname" required type="text" class="input-text" />
            </div>
            <div class="wrapper-input">
              <label for="lastname" class="label-input">last name</label>
              <input id="lastname" required type="text" class="input-text" />
            </div>
          </div>
          <div class="control-input">
            <div class="wrapper-input">
              <label for="email" class="label-input">email</label>
              <input id="email" required type="email" class="input-text" />
            </div>
            <div class="wrapper-input">
              <label for="phone" class="label-input">phone</label>
              <input id="phone" required type="phone" class="input-text" />
            </div>
          </div>
          <div class="control-input">
            <div class="wrapper-input">
              <label for="country" class="label-input">country</label>
              <input id="country" required type="text" class="input-text" />
            </div>
            <div class="wrapper-input">
              <label for="city" class="label-input">city</label>
              <input id="city" required type="text" class="input-text" />
            </div>
          </div>
          <div class="control-input">
            <div class="wrapper-input">
              <label for="address" class="label-input">address</label>
              <input id="address" required type="text" class="input-text" />
            </div>
            <div class="wrapper-input">
              <label for="postalcode" class="label-input">postal code</label>
              <input id="postalcode" required type="text" class="input-text" />
            </div>
          </div>
          <div class="control-input">
            <div class="wrapper-input">
              <label for="drivinglicence" class="label-input"
                >driving licence</label
              >
              <input
                id="drivinglicence"
                required
                type="text"
                class="input-text"
              />
            </div>
            <div class="wrapper-input">
              <label for="nationality" class="label-input">nationality</label>
              <input id="nationality" required type="text" class="input-text" />
            </div>
          </div>
          <div class="control-input">
            <div class="wrapper-input">
              <label for="placeofbirth" class="label-input"
                >place of birth</label
              >
              <input
                id="placeofbirth"
                required
                type="text"
                class="input-text"
              />
            </div>
            <div class="wrapper-input">
              <label for="dateofbirth" class="label-input">date of birth</label>
              <input id="dateofbirth" required type="date" class="input-text" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="section-title-input">employement history</h2>
        <p class="section-desc-input">
          Show your relevant experience (last 10 years). Use bullet points to
          note your achievements. If possible - use numbers/facts (Achieved X,
          measured by Y, by doing Z).
        </p>
        <div class="section-body-input">
          <button class="button-add">
            <icon-plus />
            <span>Add employment</span>
          </button>

          <div class="sub-section-body-input">
            <div class="control-input">
              <div class="wrapper-input">
                <label for="jobtitle" class="label-input">job title</label>
                <input id="jobtitle" required type="text" class="input-text" />
              </div>
              <div class="wrapper-input">
                <label for="employeer" class="label-input">employeer</label>
                <input id="employeer" required type="text" class="input-text" />
              </div>
            </div>
            <div class="control-input">
              <div class="wrapper-input">
                <div class="flex space-x-2 sm:space-x-6">
                  <div class="w-1/2 flex flex-col">
                    <label for="startdate" class="label-input"
                      >start date</label
                    >
                    <input
                      id="startdate"
                      required
                      type="date"
                      class="input-text"
                    />
                  </div>
                  <div class="w-1/2 flex flex-col">
                    <label for="enddate" class="label-input">end date</label>
                    <input
                      id="enddate"
                      required
                      type="date"
                      class="input-text"
                    />
                  </div>
                </div>
              </div>
              <div class="wrapper-input">
                <label for="city" class="label-input">city</label>
                <input id="city" required type="text" class="input-text" />
              </div>
            </div>
            <div class="wrapper-input-full">
              <label for="jobdesc" class="label-input">description</label>
              <input id="jobdesc" required type="text" class="input-text" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="section-title-input">education</h2>
        <p class="section-desc-input">
          A varied education on your resume sums up the value that your
          learnings and background will bring to job.
        </p>
        <div class="section-body-input">
          <button class="button-add">
            <icon-plus />
            <span>Add education</span>
          </button>

          <div class="sub-section-body-input">
            <div class="control-input">
              <div class="wrapper-input">
                <label for="school" class="label-input">school</label>
                <input id="school" required type="text" class="input-text" />
              </div>
              <div class="wrapper-input">
                <label for="degree" class="label-input">degree</label>
                <input id="degree" required type="text" class="input-text" />
              </div>
            </div>
            <div class="control-input">
              <div class="wrapper-input">
                <div class="flex space-x-2 sm:space-x-6">
                  <div class="w-1/2 flex flex-col">
                    <label for="startdate" class="label-input"
                      >start date</label
                    >
                    <input
                      id="startdate"
                      required
                      type="date"
                      class="input-text"
                    />
                  </div>
                  <div class="w-1/2 flex flex-col">
                    <label for="enddate" class="label-input">end date</label>
                    <input
                      id="enddate"
                      required
                      type="date"
                      class="input-text"
                    />
                  </div>
                </div>
              </div>
              <div class="wrapper-input">
                <label for="city" class="label-input">city</label>
                <input id="city" required type="text" class="input-text" />
              </div>
            </div>
            <div class="wrapper-input-full">
              <label for="jobdesc" class="label-input">description</label>
              <input id="jobdesc" required type="text" class="input-text" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="section-title-input">skills</h2>
        <p class="section-desc-input">
          Choose 5 of the most important skills to show your talents! Make sure
          they match the keywords of the job listing if applying via an online
          system.
        </p>
        <div class="section-body-input">
          <button class="button-add">
            <icon-plus />
            <span>Add skill</span>
          </button>

          <div class="w-full flex flex-wrap gap-3">
            <button class="option-skill">
              <span>Java</span>
              <icon-plus />
            </button>
            <button class="option-skill-selected">
              <span>PHP</span>
              <icon-plus />
            </button>
            <button class="option-skill">
              <span>Go</span>
              <icon-plus />
            </button>
          </div>

          <div class="sub-section-body-input">
            <div class="control-input">
              <div class="wrapper-input">
                <label for="skillname" class="label-input">skill name</label>
                <input id="skillname" required type="text" class="input-text" />
              </div>
              <div class="wrapper-input">
                <label for="skilllevel" class="label-input">level</label>
                <input
                  id="skilllevel"
                  required
                  type="text"
                  class="input-text"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  </div>
</template>

<script setup>
import { getHello } from "~~/composables/get-hello"

const hello = ref()

onMounted(async () => {
  hello.value = await getHello()
})
</script>

<style scoped>
.option-skill {
  @apply flex justify-center items-center p-2 px-4 space-x-2 bg-gray-200 font-semibold rounded-md;
}

.option-skill-selected {
  @apply flex justify-center items-center p-2 px-4 space-x-2 bg-blue-500 text-white font-semibold rounded-md;
}
</style>
