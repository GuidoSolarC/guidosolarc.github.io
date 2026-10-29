<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import SkillsMatrixSection from './components/sections/SkillsMatrixSection.vue';
import EducationSection from './components/sections/EducationSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import MaterialFab from './components/common/MaterialFab.vue';

const isDeployGuideOpen = ref(false);
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#faf9f6] dark:bg-[#12181b] text-[#273e47] dark:text-[#f1ede4] transition-colors duration-150">
    <!-- Navbar -->
    <Navbar
      @open-deploy-guide="isDeployGuideOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-1">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsMatrixSection />
      <EducationSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer
      @open-deploy-guide="isDeployGuideOpen = true"
    />

    <!-- Minimal Scroll to top FAB -->
    <MaterialFab />
  </div>
</template>
